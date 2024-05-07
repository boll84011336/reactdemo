// import addIcon from "../assets/icon/add.png";
import styled from "styled-components";
import React, { useState } from 'react';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 25px auto 40px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #333;
  width: 300px;
  font-size: 16px;
  letter-spacing: 0.05em;

  &::placeholder {
    color: #333;
  }
`;

const AddBtn = styled.button`
  padding: 0;
  border: none;
  height: 27px;
  width: 27px;
  background-color: inherit;

  img {
    cursor: pointer;
  }
`;

function AddTask(props) {
    const [inputValue, setInputValue] = useState("");
    const { onAdd } = props;

    // 新增
    const handleAddTask = (e) => {
        if (inputValue.trim() === '') return;
        onAdd(inputValue);
        setInputValue('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            onAdd(inputValue);
            setInputValue('');
        }
    };

    // 監控input內容改變
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <Wrapper>
            <Input
                name="addtask"
                type="text"
                value={inputValue}
                placeholder={"Add New Task ..."}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <AddBtn onClick={handleAddTask}>
                +ADD
            </AddBtn>
        </Wrapper>
    );
}

export default AddTask;