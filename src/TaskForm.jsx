import "./TaskForm.css"
import Tag from "./Tag"
import { useState } from "react"

export default function TaskForm({setTasks}){

    let[taskData,setTaskData] = useState({
        task:"",
        status:"todo",
        tags:[]
    })

    let checkTag = (tag)=>{
        return taskData.tags.some((item)=>(item === tag));
    }

    let selectTag = (tag)=>{
        if(taskData.tags.some((item)=>(item === tag))){
        let filterTags = taskData.tags.filter((item)=>(item !== tag))

        setTaskData(prev=>{
            return{...prev , tags:filterTags}
        })
        }
        else{
            setTaskData(prev=>{
                return{...prev , tags:[...prev.tags,tag]}
            })
        }
    }

    let handleChange = (e)=>{
        setTaskData((prevValue)=>{
            return{...prevValue,[e.target.name]:e.target.value}
        })
    }

    let handleSubmit = (e)=>{
        e.preventDefault();

            // Validate if the task field is filled
        if (taskData.task.trim() === "") {
        alert("Please enter a task");
        return;
      }

        setTasks((prevValue)=>{
            return[...prevValue,taskData]
        })

         // Clear the form after submitting
    setTaskData({
        task: "",
        status: "todo",
        tags: [],
      });
    }


    return(
        <header className='header'>
            <form onSubmit={handleSubmit}>
            <h1 className="heading">Project-Manager</h1>
                <input type="text" className="task-input" placeholder="Enter Yout Task" name="task" onChange={handleChange}   value={taskData.task} />
                <div className="task-form-container">
                    <div className="part1">
                        <Tag name="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                        <Tag name="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                        <Tag name="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
                        <Tag name="React" selectTag={selectTag} selected={checkTag("React")} />
                    </div>

                    <div className="part2">
                    <select className="task-category" name="status" onChange={handleChange}  value={taskData.status}>
                        <option value="todo">To-Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type="submit" className="submit-btn">+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}