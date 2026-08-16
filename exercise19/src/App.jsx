import {useState} from 'react'
import styles from './todo.module.css'

function App() {
  const[todos, setTodos] = useState([]);
  const[inputValue,setInputValue] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!inputValue.trim()) return;
    setTodos([...todos,
       {
        id:Date.now(),
        text: inputValue,
        completed: false
       }
      ]);
      setInputValue('');
  }
  const toggleTodo = (id)=>{
    setTodos(todos.map(todo => todo.id === id?{...todo, completed: !todo.completed}:todo))
  }
  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !==id))
  }
   return (
     <div className={styles.todoContainer}>
       <div className={styles.todos}>
         <h1 className={styles.title}>My Todo List</h1>

         <form onSubmit={handleSubmit}>
           <div className={styles.form}>
             <input
               type="text"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               placeholder="Add a new todo"
               className=""
             />
             <button type="submit" className="">
               Add
             </button>
           </div>
         </form>

         <div>
           {todos.map((todo) => (
             <div key={todo.id} className={styles.todoList}>
               <input
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => toggleTodo(todo.id)}
               />

               <span
                 className={`${styles.todoText} ${
                   todo.completed ? styles.completed : ""
                 }`}
               >
                 {todo.text}
               </span>

               <button
                 onClick={() => deleteTodo(todo.id)}
                 className={styles.deleteButton}
               >
                 Delete
               </button>
             </div>
           ))}
         </div>

         {todos.length === 0 && (
           <p className={styles.emptyMessage}>Add some tasks above!</p>
         )}
       </div>
     </div>
   );
}

export default App