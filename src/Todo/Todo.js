

const Todo = ({todos}) => {
    return (
        <div>
            {todos.map((todo)=>{
                return(
                    <div key={todo.id}>
                        <h3>{todo.id}</h3>
                        <p>{todo.title}</p>
                        <p>{todo.completed}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Todo;