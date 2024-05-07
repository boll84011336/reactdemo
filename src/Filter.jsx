import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`

  padding: 5px 10px;
  margin-right: 10px;
  background-color: #bebebe;
  border: none;
  border-bottom: 2px solid #3c5d95;
  border-radius: 3px 3px 0 0;
  color: white;
  letter-spacing: 0.1em;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #ffc236;
  }
`;

function Filter(props) {
    const { todoList, filterFunc } = props;

    const allFunction = () => {
        return filterFunc(todoList);
    }

    const todoFunction = () => {
        const todo = todoList.filter((todo) => !todo.complete)
        console.log(todo)
        filterFunc(todo);

    }

    const doneFunction = () => {
        const todoDone = todoList.filter((todo) => todo.complete);
        console.log(todoDone)

        filterFunc(todoDone);
    }

    return (
        <ButtonContainer>
            <Button onClick={allFunction}>ALL</Button>
            <Button onClick={todoFunction}>TODO</Button>
            <Button onClick={doneFunction}>DONE</Button>
        </ButtonContainer>
    );
}
export default Filter;
