import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62be8a7c0bc9b125615983e9.mockapi.io',
  }),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    getTodos: builder.query({ query: () => '/todos', providesTags: ['Todos'] }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: text => ({
        url: `/todos`,
        method: 'POST',
        body: { text, isComplete: false, isFavorite: false },
      }),
      invalidatesTags: ['Todos'],
    }),
    editTodo: builder.mutation({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: {
          text: todo.text,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
    toggleComplete: builder.mutation({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: {
          isCompleted: !todo.isCompleted,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
    toggleFavorite: builder.mutation({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: {
          isFavorite: !todo.isFavorite,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useAddTodoMutation,
  useToggleCompleteMutation,
  useToggleFavoriteMutation,
} = apiSlice;
