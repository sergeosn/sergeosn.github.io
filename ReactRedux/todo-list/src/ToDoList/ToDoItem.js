import React from 'react';

const ToDoItem = ({ id, name, completed, deleted, onClick, onDeleteClick, onReestablishClick }) => (
    <li className="list-group-item">
        <div className="form-check">
            <div className={deleted ? 'form-check-deleted' : ''}>
                <input
                    type="checkbox"
                    className="form-check-input"
                    id={`checkbox-${id}`}
                    onChange={onClick}
                    checked={completed}
                />

                <label className="form-check-label" htmlFor={`checkbox-${id}`}>
                    {name}
                </label>

                {deleted ? <span className="form-check-reestablish-button" onClick={onDeleteClick}>+</span> :
                           <span className="form-check-delete-button" onClick={onReestablishClick}>×</span>
                }
            </div>
        </div>
    </li>
);

export default ToDoItem;
