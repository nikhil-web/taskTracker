import React from 'react';

const TaskCard = ({ task, onDone, onDelete }) => {
    return (
        <div style={styles.card}>
            <h3>{task.title}</h3>
            <p>{task.details}</p>
            <p><strong>Tentative Finish Date:</strong> {task.tentativeDate}</p>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => onDone(task.id)}>Done</button>
                <button style={styles.button} onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
        fontWeight: 'bold',
    },
};

export default TaskCard;
