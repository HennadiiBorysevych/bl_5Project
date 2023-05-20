import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from 'redux/todo/slice';

export const Todo = ({ text, counter, onClick, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const [newValue, setNewValue] = useState(text);
  const dispatch = useDispatch();
  useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>

        {isEditing ? (
          <input
            ref={inputRef}
            name="text"
            value={newValue}
            onBlur={() => {
              setIsEditing(false);
              dispatch(editTodo({ id, query: newValue }));
            }}
            onChange={e => setNewValue(e.target.value)}
            autoFocus
          />
        ) : (
          <Text onClick={() => setIsEditing(true)}>{text}</Text>
        )}
        <DeleteButton type="button" onClick={() => onClick(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
