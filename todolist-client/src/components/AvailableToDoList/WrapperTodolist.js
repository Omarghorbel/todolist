import styled from "styled-components"

const WrapperTodolist = styled.div`
    .todo-input {
        padding: 14px 32px 14px 16px;
        border-radius: 4px 0 0 4px;
        border: 2px solid #5d0cff;
        outline: none;
        width: 30%;
        background: transparent;
        color: black;
    }
    .todo-button {
        padding: 16px;
        border: none;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        outline: none;
        background: linear-gradient(
        90deg,
        rgba(93, 12, 255, 1) 0%,
        rgba(155, 0, 250, 1) 100%
    );
    color: #fff;
    text-transform: capitalize;
    }
    .todo-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px auto;
        color: #fff;
        background: linear-gradient(
        90deg,
        rgba(93, 12, 255, 1) 0%,
        rgba(17, 122, 255, 1) 100%
    );
    padding: 16px;
    border-radius: 5px;
    width: 37%;
    }
    .buttonAction{
    border: none;
    background: none;
    }
`
export default WrapperTodolist
