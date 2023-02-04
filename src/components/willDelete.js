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