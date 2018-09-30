import { UPDATE_NAME, UPDATE_AGE, TOGGLE_CHECKBOX } from './action-types';

const initialState = {
    name: 'Name',
    age: 34,
    isStudent: false,
};

export const appReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.name,
            };
        case UPDATE_AGE:
            return {
                ...state,
                age: action.age,
            };
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                isStudent: !state.isStudent,
            };
        default:
            return state;
    }
};
