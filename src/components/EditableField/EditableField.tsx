import React, { MouseEventHandler, useEffect, useState } from 'react';
import { Input, Tooltip } from '@chakra-ui/react';

interface IProps {
  initialValue: string;
  isEditing: boolean;
  toggleEditing: MouseEventHandler;
  handleEdit: (value: string) => void;
}

export const EditableField: React.FC<IProps> = ({
  handleEdit,
  toggleEditing,
  initialValue,
  isEditing,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: any) => {
    setValue(e.currentTarget.value);
  };

  const handleKeydown = (e: any) => {
    if (e.key === 'Enter') {
      handleEdit(value);
      setValue(initialValue);
      toggleEditing(e);
    }
    if (e.key === 'Escape') {
      setValue(initialValue);
      toggleEditing(e);
    }
  };

  const handleBlur = (e: any) => {
    setValue(initialValue);
    toggleEditing(e);
  };

  return (
    <>
      {isEditing ? (
        <Input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          autoFocus={true}
          onBlur={handleBlur}
          mr={'15px'}
        />
      ) : (
        <Tooltip label="Double click to edit todo text">
          <span onDoubleClick={toggleEditing}>{initialValue}</span>
        </Tooltip>
      )}
    </>
  );
};
