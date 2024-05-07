// import checkIcon from "../assets/icon/check.png";
import styled from "styled-components";

import "./index.css";


const Wrapper = styled.div`
  background-color: white;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05em;
  padding: 0 20px;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const TaskName = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;

const Button = styled.div`
  background-color: #bebebe;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  width: min-content;
  color: white;
  letter-spacing: 0.05em;
  cursor: pointer;

  &:hover {
    background-color: #F5727E;
  }
`;

function TaskItem(props) {
  const { todo, onToggle } = props;

  const handleDelete = () => {
    // 呼叫父組件傳遞過來的 handleDelete 函數，並傳遞待辦事項的 id
    props.onDelete(todo.id);
  };

  const handleClick = (e) => {
    onToggle(todo.id);
  }

  return (
    <Wrapper>
      <CheckBox type="checkbox" checked={todo.complete} onChange={handleClick} />
      <TaskName className={todo.complete ? "todo strike" : "todo"} onClick={handleClick}> {todo.task} </TaskName>
      <Button onClick={handleDelete}>Delete</Button>
    </Wrapper>
  );
}

export default TaskItem;
