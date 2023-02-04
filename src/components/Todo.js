

const Todo = ({text, todo, todos, setTodos}) => {


    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const editHandler = () => {
        setTodos(todos.map (item => {
            if (item.id === todo.id) {
                return {
                    ...item, text: item.text = prompt('Please enter what you would like to change?')
                }
            } return item
        }))
    }

     
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }


    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"> 
            <i className="fas fa-check"></i>
            </button>
            <button
           onClick={editHandler}
             className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i>
                </button>
        </div>
    );
}

export default Todo;