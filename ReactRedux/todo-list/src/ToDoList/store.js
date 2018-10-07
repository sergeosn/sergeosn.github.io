import { combineReducers } from 'redux';

import { getFilterFunc, filterList, get } from './helpers';
import {
    action,
    createReducer,
    mergePayload,
    lookupReducer,
    include,
    domainSelector,
    deletedState,
} from '../redux-utils';

const initialTodoState = {
    id: null,
    name: '',
    completed: false,
    deleted: false,
};

const _toggleTodo = action('TODO::TOGGLE');
const _saveTodo = action('TODO::SAVE');
const _deleteTodo = action('TODO::DELETE');
const _reestablishTodo = action('TODO::REESTABLISH');
export const setFilter = action('TODO::SET-FILTER');

let id = 1;

export const toggleTodo = id => _toggleTodo({ id });
export const saveTodo = (_) => _saveTodo({ ...initialTodoState, ..._, id: id++ });
export const deleteTodo = (id) => _deleteTodo({ id });
export const reestablishTodo = (id) => _reestablishTodo({ id });

const todo = createReducer(initialTodoState, {
    [_toggleTodo.type]: state => ({
        ...state, completed: !state.completed,
    }),
    [_saveTodo.type]: mergePayload,
    [_deleteTodo.type]: deletedState,
    [_reestablishTodo.type]: deletedState,
});

const todoLookup = lookupReducer(todo);

const byId = createReducer({}, {
    [_toggleTodo.type]: todoLookup,
    [_saveTodo.type]: todoLookup,
    [_deleteTodo.type]: todoLookup,
    [_reestablishTodo.type]: todoLookup,
});

const ids = createReducer([], {
    [_saveTodo.type]: (state, { payload } ) => include(state, payload.id),
});

const filter = createReducer('all', {
    [setFilter.type]: (_, { payload }) => payload,
});

const todos = combineReducers({ byId, ids, filter });

export default todos;

// ------- SELECTORS --------
const createSelector = (...selectors) => {
    const selector = selectors.pop();
    return (...args) => selector(
        ...selectors.map(s => s(...args))
    );
}

export const domain = domainSelector(
    state => state.todos
);

export const getTodos = createSelector(
    domain, ({ ids, byId }) => ids.map(id => byId[id])
);

export const getFilterValue = createSelector(
    domain, get('filter')
);

export const getFilter = createSelector(
    getFilterValue, getFilterFunc
);

export const getVisibleTodos = createSelector(
    getTodos, getFilter, filterList
);