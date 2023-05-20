import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6468fdff183682d614376164.mockapi.io',
  }),
  tagTypes: ['todos'],

  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todos',
      providesTags: ['todos'],
    }),

    addTodo: builder.mutation({
      query: todo => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['todos'],
    }),

    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todos'],
    }),

    updateTodo: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
