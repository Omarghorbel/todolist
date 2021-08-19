import React,{useState} from 'react'
import { useQuery,useMutation} from "@apollo/react-hooks";
import {FETCH_ALLTODOLIST_QUERY} from "../../graphql/Queries";
import {ADD_TODOLIST,DELETE_TODOLIST} from "../../graphql/Mutations";
import WrapperTodolist from "./WrapperTodolist";

const ToDoLists = () => {
    const [values, setValues] = useState({
        title:"",
        todoList:[
        ]});
    const Onchange=(event)=>{
        const {name,value}=event.target
        setValues({...values,[name]:value})
    }
    const [ADD_TODOLISTAction, {
        data: dataUpdate,
        loading: loading_EventUpdated,
        error: error_EventUpdated,
    }] = useMutation(ADD_TODOLIST, {
        variables:{title:values.title}
    });
    const [onDeleteHandler, { data1, loading1, error }] = useMutation(DELETE_TODOLIST,{
        refetchQueries: [
         FETCH_ALLTODOLIST_QUERY
    ]
    })
    const {loading, data} =  useQuery(FETCH_ALLTODOLIST_QUERY,
        {
            onCompleted: async (data) => {
                await setValues({...values,todoList:data.getToDoList})
            }
        });
    if ( loading){
        return (<p>Loading...</p>)
    }
    const onHandleSubmit=async ()=>{
        await setValues({...values,todoList:[...values.todoList,{title:values.title}]})
        ADD_TODOLISTAction()
    }
    return (
    <>
        <WrapperTodolist>
            <>
                <input
                    placeholder='Add a todo'
                      name='title'
                    className='todo-input'
                    onChange={Onchange}
                 />
                <button  onClick={onHandleSubmit} className='todo-button'>
                    Add todo
                </button>
                {!loading &&
                <>
                    {values && values.todoList.map((todoList, index) => {
                        return (
                            <div>
                                <center>
                                <td className='todo-row'>{todoList.title}</td>
                                <td>
                                    <button  className='buttonAction'  onClick={() => onDeleteHandler({ variables: { title: todoList.title } })}><img
                                                                    src='/assets/images/remove.png' alt=''/>
                                    </button>
                                </td>
                                </center>
                        </div>
                        );
                    })}
                </>
                }
            </>
        </WrapperTodolist>
    </>
  )
}

export default ToDoLists
