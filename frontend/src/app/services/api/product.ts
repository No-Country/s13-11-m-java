import { api } from "./index";
import {
  AllProductsResponse,
  DeleteProductProcessRequest,
  DeleteProductProcessResponse,
  DeleteProductRequest,
  ProductCreateRequest,
  ProductCreateResponse,
  ProductIdRequest,
  ProductIdResponse,
  ProductNameRequest,
  ProductNameResponse,
  ProductProcessRequest,
  ProductProcessResponse,
  ProductUpdateRequest,
  ProductUpdateResponse,
  UniqueProductIdRequest,
  UniqueProductIdResponse,
} from "./types";

//product-controller

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateProduct: builder.mutation<ProductUpdateResponse, ProductUpdateRequest>({
      query: (updateData) => ({
        url: `/v1/products/update/${updateData.id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["Products"],
    }),
    processProduct: builder.mutation<ProductProcessResponse, ProductProcessRequest>({
      query: ({ productId, ...process }) => ({
        url: `/v1/products/process/${productId}`,
        method: "POST",
        body: process,
      }),
    }),
    createProduct: builder.mutation<ProductCreateResponse, ProductCreateRequest>({
      query: (productData) => ({
        url: `/v1/products/create`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Products"],
    }),
    getProductByName: builder.query<ProductNameResponse, ProductNameRequest>({
      query: (name) => `/v1/products/product-name/${name}`,
    }),
    getProductById: builder.query<ProductIdResponse, ProductIdRequest>({
      query: (id) => `/v1/products/product-id/${id}`,
    }),
    getUniqueProductId: builder.query<UniqueProductIdResponse, UniqueProductIdRequest>({
      query: (idUnico) => `/v1/products/product-id-unico/${idUnico}`,
    }),
    getAllProducts: builder.query<AllProductsResponse, void>({
      query: () => "/v1/products/all",
      providesTags: ["Products"],
    }),
    deleteProductProcess: builder.mutation<DeleteProductProcessResponse, DeleteProductProcessRequest>({
      query: ({ productId, processId }) => ({
        url: `/v1/products/process/${productId}/${processId}`,
        method: "DELETE",
      }),
    }),
    deleteProduct: builder.mutation<void, DeleteProductRequest>({
      query: (id) => ({
        url: `/v1/products/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useUpdateProductMutation,
  useProcessProductMutation,
  useCreateProductMutation,
  useGetProductByNameQuery,
  useGetProductByIdQuery,
  useGetUniqueProductIdQuery,
  useGetAllProductsQuery,
  useDeleteProductProcessMutation,
  useDeleteProductMutation,
} = productApi;
