import React, { useState } from 'react';
import TaskCard from './TaskCardSingle';

const TaskList = () => {

    let taskList = [
        { id: 1, title: 'Task 1', details: 'Details of task 1', tentativeDate: '2024-11-10' },
        { id: 2, title: 'Task 2', details: 'Details of task 2', tentativeDate: '2024-11-15' },
    ]

    const [tasks, setTasks] = useState(taskList);

    const handleDone = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} onDone={handleDone} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TaskList;
