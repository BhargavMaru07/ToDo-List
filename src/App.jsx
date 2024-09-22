
import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskColumn from './TaskColumn';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';

let oldtasks = localStorage.getItem("tasks");

function App() {

  let [tasks, setTasks] = useState(JSON.parse(oldtasks) || []);
  let [active, setActive] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    let newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };

  const changeOnDrop = (status, position) => {
    
    if(active === null || active === undefined) return;

    let taskToMove = tasks[active];

    let updatedTasks = tasks.filter((task,index)=>index !== active)

    updatedTasks.splice(position,0,{
      ...taskToMove,
      status:status
    })

    setTasks(updatedTasks)
  };

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='main'>
        <TaskColumn 
          category="TO Do" 
          icon={todoIcon} 
          tasks={tasks} 
          status="todo" 
          handleDelete={handleDelete} 
          setActive={setActive} 
          changeOnDrop={changeOnDrop} 
        />
        <TaskColumn 
          category="Doing" 
          icon={doingIcon} 
          tasks={tasks} 
          status="doing" 
          handleDelete={handleDelete} 
          setActive={setActive} 
          changeOnDrop={changeOnDrop} 
        />
        <TaskColumn 
          category="Done" 
          icon={doneIcon} 
          tasks={tasks} 
          status="done" 
          handleDelete={handleDelete} 
          setActive={setActive} 
          changeOnDrop={changeOnDrop} 
        />
      </main>
    </div>
  );
}

export default App;

