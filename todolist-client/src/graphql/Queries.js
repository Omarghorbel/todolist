import gql from "graphql-tag";
export const FETCH_ALLTODOLIST_QUERY = gql`
    {
        getToDoList{
            id title 
        }
    }
`;
