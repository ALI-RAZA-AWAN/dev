import react from 'react'
import { useState,useEffect } from 'react'


function App(){

const [tasks,setTasks] = useState([]);
const [inputTitle,setTitle]= useState("");

useEffect(()=>{
  fetchdata();
},[]);

const fetchdata=async ()=>{
   const res=await fetch('http://localhost:3000/tasks');
   const data=await res.json();
   setTasks(data);
};

const handleAddTask=async (e)=>{
e.preventDefault();
if(!inputTitle.trim()) return;

const res = await fetch ('http://localhost:3000/tasks',{
  method:'POST', headers:{'Content-Type': 'application/json'} , body:JSON.stringify({title:inputTitle}),
  });

  const newTask= await res.json();
  setTasks([...tasks,newTask]);
  setTitle("");
};

const handleToggleTask = async(id)=>{
const res = await fetch(`http://localhost:3000/tasks/${id}`,{
  method:'PUT',
});
const updatedTask = await res.json();
setTasks(
      tasks.map((task) => (task._id === id ? updatedTask : task))
    );
};

const handleDeleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1>My Task Tracker</h1>

      {/* Add Task Form */}
      <form onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputTitle}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: '8px', width: '70%', marginRight: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Add Task
        </button>
      </form>

      {/* Task List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task._id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <span
              onClick={() => handleToggleTask(task._id)}
              style={{
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#888' : '#000',
              }}
            >
              {task.completed ? '✓ ' : '◯ '} {task.title}
            </span>

            <button
              onClick={() => handleDeleteTask(task._id)}
              style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;