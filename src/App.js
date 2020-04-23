import React, {useEffect, useState} from 'react';
import './App.sass';
import queryString from 'query-string'

import ColorBox from "./components/ColorBox/index";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import PostList from "./components/PostList/PostList";
import Pagination from "./components/Pagination/Pagination";
import PostFilterForm from "./components/PostFilterForm/PostFilterForm";
import Clock from "./components/Clock/Clock";
import ClockClass from "./components/Clock/ClockClass";

function App() {
  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Angular'},
    {id: 2, title: 'Reactjs'},
    {id: 3, title: 'Vuejs'}
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({responseJSON})
        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination);
        console.log(pagination);
      } catch (e) {
        console.log('fail' + e.message);
      }

    }
    fetchPostList();
  }, [filters])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  const handleTodoClick = (todo) => {
    const index = todoList.findIndex(item => item.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    };
    const newTodoList = [...todoList, {...newTodo}];
    setTodoList(newTodoList);
  }

  function handleFilterChange(newFilter) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm
    })
  }

  return (
      <div>
        <h1>Reactjs</h1>
        {/*<TodoForm onSubmit={handleTodoFormSubmit}/>*/}
        {/*<TodoList todos={todoList} onTodoClick={handleTodoClick} />*/}
        {/*<PostFilterForm onSubmit={handleFilterChange} />*/}
        {/*<PostList posts={postList} />*/}
        {/*<Pagination pagination={pagination} onPageChange={handlePageChange} />*/}
        {/*<Clock/>*/}
        <ClockClass />
      </div>
  );
}

export default App;
