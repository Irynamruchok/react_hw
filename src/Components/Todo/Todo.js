
const Todo = ({todo}) => {

    return (
        <div>
            <h3>{todo.id}</h3>
            <p>{todo.title}</p>
            <p>{todo.completed}</p>
        </div>
    );
};

export default Todo;