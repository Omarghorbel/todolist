import gql from "graphql-tag";

export const ADD_TODOLIST = gql`
    mutation addTodolist($title: String){
    addTodolist(title: $title)
    }
`;

export const DELETE_TODOLIST = gql`
    mutation deleteElement($title: String){
    deleteElement(title: $title)
    }
`;
