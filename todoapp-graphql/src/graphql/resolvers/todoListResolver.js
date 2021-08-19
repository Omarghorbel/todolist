import Todolist from "../../models/todolist";
import axios from 'axios'
const todolistResolver = {
    Query: {
        getToDoList: async () => {
            try {
                return Todolist.find()
                    .exec();
            } catch (err) {
                console.log(err);
            }
        },
    },
    Mutation: {
        async addTodolist(
            _,
            {
                title
            }
        ) {
            await axios.post('http://localhost:4007/api/addnew', {
                title: title
            })
                .then((response) => {
                }, (error) => {
                    console.log(error);
                });
            return true
        },
        async deleteElement(_, { title }){
            await axios.delete(`http://localhost:4007/api/delete/${title}`, {
                data: title             })
                .then((response) => {
                }, (error) => {
                    console.log(error);
                });
            return true;
        },
    },
};
export default todolistResolver;
