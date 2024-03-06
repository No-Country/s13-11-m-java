import { api } from "./index";
import {
  CreateSubprocessRequest,
  CreateSubprocessResponse,
  DeleteProcessRequest,
  DeleteProcessResponse,
  DeleteSubprocessRequest,
  DeleteSubprocessResponse,
  GetProcessByIdRequest,
  GetProcessByIdResponse,
  ListAllProcessesResponse,
  UpdateProcessRequest,
  UpdateProcessResponse,
} from "./types";

const processApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProcessById: builder.query<GetProcessByIdResponse, GetProcessByIdRequest>({
      query: (processId) => `/api/v1/process/${processId}`,
    }),
    updateProcess: builder.mutation<UpdateProcessResponse, UpdateProcessRequest>({
      query: (updateProcessData) => ({
        url: `/api/v1/process/${updateProcessData.id}`,
        method: "PUT",
        body: updateProcessData,
      }),
    }),
    deleteProcess: builder.mutation<DeleteProcessResponse, DeleteProcessRequest>({
      query: (processId) => ({
        url: `/api/v1/process/${processId}`,
        method: "DELETE",
      }),
    }),
    createSubprocess: builder.mutation<CreateSubprocessResponse, CreateSubprocessRequest>({
      query: ({ id, ...createSubprocessData }) => ({
        url: `/api/v1/process/subprocess/${id}`,
        method: "POST",
        body: createSubprocessData,
      }),
    }),
    listAllProcesses: builder.query<ListAllProcessesResponse, void>({
      query: () => "/api/v1/process/",
    }),
    deleteSubprocess: builder.mutation<DeleteSubprocessResponse, DeleteSubprocessRequest>({
      query: ({ processId, subprocessId }) => ({
        url: `/api/v1/process/subprocess/${processId}/${subprocessId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProcessByIdQuery,
  useUpdateProcessMutation,
  useDeleteProcessMutation,
  useCreateSubprocessMutation,
  useListAllProcessesQuery,
  useDeleteSubprocessMutation,
} = processApi;
