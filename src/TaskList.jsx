import Filter from "./Filter";
import TaskItem from "./TaskItem";

import styled from "styled-components";
import React, { useState, useEffect } from 'react';


const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  min-width: 300px;
`;

const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  background-color: #f8f8f8;
`;

function TaskList(props) {
    const { todoList, handleToggle, handleDelete } = props;
    const [filterTodos, setFilterTodos] = useState(todoList);

    // 勾選抓不到是因為，我只有寫filterFunc 切換才能抓setFilterTodos，所以還是必須靠todoList發生變化時 重新撈取
    useEffect(() => {
        setFilterTodos(todoList);
    }, [todoList])

    const filterFunc = (todos) => {
        setFilterTodos(todos);
    }

    return (
        <Wrapper>
            <Filter todoList={todoList} filterFunc={filterFunc} />
            <TaskItemContainer>
                {filterTodos.map((t, key) => {
                    return (<TaskItem key={key} todo={t} onToggle={handleToggle} onDelete={handleDelete} // 將刪除操作傳遞給 TaskItem 組件
                    />)
                })}
            </TaskItemContainer>
        </Wrapper>
    );
}

export default TaskList;