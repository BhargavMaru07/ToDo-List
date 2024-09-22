

import React from 'react';
import "./TaskColumn.css";
import TaskCard from './TaskCard';
import DropArea from './DropArea';

const TaskColumn = ({ category, icon, tasks, status, handleDelete, setActive, changeOnDrop }) => {
    return (
        <section className='task-section'>
            <h2 className='task-category-heading'>
                <img className='task-category-icon' src={icon} alt="" />{category}
            </h2>

            {/* First drop area */}
            <DropArea changeOnDrop={() => changeOnDrop(status, 0)} />

            {tasks.map((task, index) => (
                task.status === status && (
                    <React.Fragment key={index}>
                        <TaskCard 
                            title={task.task} 
                            tags={task.tags} 
                            handleDelete={handleDelete} 
                            index={index} 
                            setActive={setActive} 
                        />
                        {/* Drop area after each task */}
                        <DropArea changeOnDrop={() => changeOnDrop(status, index + 1)} />
                    </React.Fragment>
                )
            ))}
        </section>
    );
};

export default TaskColumn;
