import { useState } from 'react';
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useToggleCompleteMutation,
  useToggleFavoriteMutation,
} from '../redux/apiSlice';

export const useTodoItem = (
  id: string,
  isCompleted: boolean,
  isFavorite: boolean
) => {
  const [isEditing, setIsEditing] = useState(false);

  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  const [editTodo, { isLoading: isUpdating }] = useEditTodoMutation();
  const [toggleComplete] = useToggleCompleteMutation();
  const [toggleFavorite] = useToggleFavoriteMutation();

  const handleEditTodo = (value: string) => {
    editTodo({ id, text: value });
  };

  const onDeleteTodoClicked = () => {
    deleteTodo(id);
  };

  const toggleEditing = () => {
    setIsEditing(prevState => !prevState);
  };

  const handleToggleComplete = () => {
    toggleComplete({ id, isCompleted });
  };

  const handleToggleFavorite = () => {
    toggleFavorite({ id, isFavorite });
  };

  return {
    isUpdating,
    isEditing,
    toggleEditing,
    handleEditTodo,
    onDeleteTodoClicked,
    isDeleting,
    handleToggleComplete,
    handleToggleFavorite,
  };
};
