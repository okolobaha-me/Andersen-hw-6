import React from 'react';
import { Box, ListIcon, ListItem } from '@chakra-ui/react';
import { BiRadioCircle } from 'react-icons/bi';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { BsStarFill } from 'react-icons/bs';
import { EditableField } from '../EditableField/EditableField';
import { PopoverMenu } from '../PopoverMenu/PopoverMenu';
import { useTodoItem } from '../../hooks/useTodoItem';

interface IProps {
  id: string;
  isCompleted: boolean;
  isFavorite: boolean;
  text: string;
}

export const TodoItem: React.FC<IProps> = ({
  id,
  text,
  isFavorite,
  isCompleted,
}) => {
  const {
    isUpdating,
    isEditing,
    toggleEditing,
    handleEditTodo,
    onDeleteTodoClicked,
    isDeleting,
    handleToggleComplete,
    handleToggleFavorite,
  } = useTodoItem(id, isCompleted, isFavorite);

  return (
    <ListItem
      border="2px"
      borderColor={isCompleted ? 'green.500' : 'white'}
      borderRadius="10px"
      padding="5px"
      display={'flex'}
      alignItems={'center'}
    >
      <ListIcon
        as={isCompleted ? IoCheckmarkDoneCircleSharp : BiRadioCircle}
        color="green.500"
      />
      {isUpdating ? (
        'Todo text is updating...'
      ) : (
        <EditableField
          initialValue={text}
          isEditing={isEditing}
          toggleEditing={toggleEditing}
          handleEdit={handleEditTodo}
        />
      )}
      <Box
        ml={'auto'}
        mr={'15px'}
        display={'flex'}
        alignItems={'center'}
        gap={'10px'}
      >
        {isFavorite && (
          <BsStarFill
            color={'yellow'}
            onClick={handleToggleFavorite}
            cursor={'pointer'}
          />
        )}
        <PopoverMenu
          deleteTodo={onDeleteTodoClicked}
          toggleEditing={toggleEditing}
          isDeleting={isDeleting}
          toggleComplete={handleToggleComplete}
          isCompleted={isCompleted}
          toggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </Box>
    </ListItem>
  );
};
