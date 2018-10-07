import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';
import {
    toggleTodo,
    deleteTodo,
    reestablishTodo,
    saveTodo,
    setFilter,
    getVisibleTodos as getTodos,
    getFilterValue,
} from './store';

const ToDoList = ({
          todos,
          onTodoClick,
          onTodoDeleteClick,
          onTodoReestablishClick,
          onTodoSave,
          filter,
          onFilterChange
    }) => (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <select className="form-control" value={filter} onChange={onFilterChange}>
                        <option value="all">all</option>
                        <option value="completed">completed</option>
                        <option value="not-completed">not completed</option>
                        <option value="deleted">deleted</option>
                    </select>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {todos.map && todos.map(
                            todo => (
                                <ToDoItem
                                    key={todo.id}
                                    {...todo}
                                    onClick={() => onTodoClick(todo.id)}
                                    onDeleteClick={() => onTodoDeleteClick(todo.id)}
                                    onReestablishClick={() => onTodoReestablishClick(todo.id)}
                                />
                            )
                        )}
                    </ul>

                    <form className="form-group form-inline add-form">
                        <input type="text" className="form-control" ref={(node) => { this.input = node; }} />
                        <button type="button" className="btn btn-success" onClick={
                            () => {
                                onTodoSave(this.input.value, filter);
                                this.input.value = '';
                            }}>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
);

const state2Props = state => ({
    todos: getTodos(state),
    filter: getFilterValue(state),
});

const handlers = {
    onTodoClick: id => toggleTodo(id),
    onTodoSave: (name, filter) => saveTodo({ name, completed: filter === 'completed' }),
    onTodoDeleteClick: id => deleteTodo(id),
    onTodoReestablishClick: id => reestablishTodo(id),
    onFilterChange: ({ target }) => setFilter(target.value),
};

export default connect(state2Props, handlers)(ToDoList);