import { gql } from "apollo-server";

const Query = gql`
  type Query {
    getToDoList: [Todolist]
   }
    type Mutation {
    addTodolist(title: String): Boolean
    deleteElement(title: String): Boolean
  }
`;

export default Query;
