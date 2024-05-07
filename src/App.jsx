import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "./App.css";
import styled from "styled-components";
import React, { useState } from 'react';
import data from "./data.json";

const Wrapper = styled.div`
  background-color: #3c5d95;
  height: 100vh;
  padding-top: 70px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 2px;
  color: #ffc236;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


function App() {
  const [todoList, setTodoList] = useState(data);

  // add todo method
  const handleAddTodo = (newTask) => {
    const newTodo = {
      id: todoList.length + 1,
      task: newTask,
      complete: false
    };
    setTodoList([...todoList, newTodo]);
  };


  const handleToggleTodo = (id) => {
    let mapped = todoList.map(task => {
      // return點的id跟傳進來的id 是否一致 ? 相同的改變complete, 不同的complete不變
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    })
    // 將改變過後的state set回去
    setTodoList(mapped);
  }

  // 接收點擊到的id
  const handleDeleteTodo = (id) => {
    let filtered = todoList.filter(task => {
      return Number(id) !== task.id;
    });
    setTodoList(filtered);
  }
  return (
    <Wrapper>
      <Title>Todolist</Title>
      <AddTask onAdd={handleAddTodo} />
      <TaskList todoList={todoList} handleToggle={handleToggleTodo} handleDelete={handleDeleteTodo} />

    </Wrapper>
  );
}

export default App;