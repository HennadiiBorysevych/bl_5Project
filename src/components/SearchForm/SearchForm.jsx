import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
// import { useDispatch } from 'react-redux';
// import { addTodo } from 'redux/todo/slice';
import { useAddTodoMutation } from 'redux/Api/Api';
import { nanoid } from 'nanoid';

export const SearchForm = () => {
  const [query, setQuery] = useState('');
  // const dispatch = useDispatch();
  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      query,
    };
    addTodo(todo);
    // dispatch(addTodo(todo));
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
