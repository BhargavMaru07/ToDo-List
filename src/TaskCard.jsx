import React from 'react';
import "./TaskCard.css"
import Tag from './Tag';
import deleteIcon from "./assets/delete.png"


const TaskCard = ({title,tags,handleDelete,index,setActive}) => {
    return (
        <div>
            <article className='task-card' draggable onDragStart={()=>setActive(index)} onDragEnd={()=>setActive(null)}>
                <p className='task-text'>{title}</p>
                <div className="task-card-container">
                    <div className="task-card-tags">
                     {
                        tags.map((tag,index)=><Tag name={tag} key={index} selected={true}/>)
                     }
                    </div>
                    <div className="task-delete" onClick={()=>handleDelete(index)}>
                        <img className='delete-icon' src={deleteIcon} alt=""  />
                    </div>
                </div>
            </article>
        </div>
    );
};

export default TaskCard;