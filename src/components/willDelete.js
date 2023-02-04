
// This file can be ignored, it was failed attempt until I finally corrected it. The correct one are in src/components/Todo.js

const editText = ()=> {
    changeText();
};  


const EditHandler = () => {
    setTodos(todos.map(item => {
        if(item.id === todo.id){
            return {
                ...item, text: (<input 
                    placeholder='Type here...'
                    value={changeText} 
                    onChange={editText} 
                    type="text" 
                     />)
            }
        } if (text.id) {
            return <Form text={editText} onSubmit={EditHandler} />;
        }
        return item
    }))
}