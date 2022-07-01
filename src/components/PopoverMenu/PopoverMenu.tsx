import {
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  Portal,
  PopoverTrigger,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
import React from 'react';
import { DeleteConfirm } from '../DeleteConfirm/DeleteConfirm';

interface IProps {
  isDeleting: boolean;
  isCompleted: boolean;
  isFavorite: boolean;
  deleteTodo: () => void;
  toggleEditing: () => void;
  toggleComplete: () => void;
  toggleFavorite: () => void;
}

export const PopoverMenu: React.FC<IProps> = ({
  deleteTodo,
  toggleEditing,
  isDeleting,
  toggleComplete,
  isCompleted,
  toggleFavorite,
  isFavorite,
}) => {
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();

  const handleDelete = (close: () => void) => {
    deleteTodo();
    close();
  };

  const handleEdit = (close: () => void) => {
    toggleEditing();
    close();
  };

  const handleToggleComplete = (close: () => void) => {
    toggleComplete();
    close();
  };

  const handleToggleFavorite = (close: () => void) => {
    toggleFavorite();
    close();
  };

  return (
    <Popover closeOnBlur={true} placement="right">
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button colorScheme="blue" disabled={isDeleting}>
              <GrMenu />
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverCloseButton />

              <PopoverBody>
                <Box display={'flex'} gap={'10px'}>
                  <Button mt={4} colorScheme="red" onClick={onOpen}>
                    Delete
                  </Button>
                  <DeleteConfirm
                    isOpen={isOpen}
                    onClose={closeModal}
                    deleteTodo={() => {
                      handleDelete(onClose);
                    }}
                  />
                  <Button
                    mt={4}
                    colorScheme="yellow"
                    onClick={() => {
                      handleEdit(onClose);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    mt={4}
                    colorScheme={isCompleted ? 'red' : 'green'}
                    onClick={() => {
                      handleToggleComplete(onClose);
                    }}
                  >
                    {isCompleted ? 'Not complete' : 'Complete'}
                  </Button>
                  <Button
                    mt={4}
                    colorScheme={isFavorite ? 'red' : 'green'}
                    onClick={() => {
                      handleToggleFavorite(onClose);
                    }}
                  >
                    {isFavorite ? 'remove from fav' : 'Add to fav'}
                  </Button>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
};
