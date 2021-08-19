import { gql } from "apollo-server";
const typeDefs = gql`
  type Todolist {
    id: ID
    title: String
  }
`;

export default typeDefs;
