import { api } from "./index";
import {
  AllProductsResponse,
  CreateProductRequest,
  CreateProductResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetProductByIdRequest,
  GetProductByIdResponse,
  GetProductByNameRequest,
  GetProductByNameResponse,
  GetProductByUnicoIdRequest,
  GetProductByUnicoIdResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "./types";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<AllProductsResponse, void>({
      providesTags: ["Products"],
      query: () => ({
        url: "/v1/products/all",
        method: "GET",
      }),
    }),

    getProductByName: builder.query<GetProductByNameResponse, GetProductByNameRequest>({
      query: (name) => ({
        url: `/v1/products/product-name/${name}`,
        method: "GET",
      }),
    }),
    getProductById: builder.query<GetProductByIdResponse, GetProductByIdRequest>({
      query: (id) => `/v1/products/product-id/${id}`,
    }),

    getProductByUnicoId: builder.query<GetProductByUnicoIdResponse, GetProductByUnicoIdRequest>({
      query: (idUnico) => `/v1/products/product-id-unico/${idUnico}`,
    }),
    updateProduct: builder.mutation<UpdateProductResponse, UpdateProductRequest>({
      query: (product) => ({
        url: `/v1/products/update/${product.id}`,
        body: product,
      }),
    }),

    createProduct: builder.mutation<CreateProductResponse, CreateProductRequest>({
      query: (product) => ({
        url: "/v1/products/create",
        body: product,
        method: "POST",
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation<DeleteProductResponse, DeleteProductRequest>({
      query: (id) => ({ url: `/v1/products/delete/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByNameQuery,
  useGetProductByIdQuery,
  useGetProductByUnicoIdQuery,
  useUpdateProductMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productApi;
