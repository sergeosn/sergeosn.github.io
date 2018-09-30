import { UPDATE_NAME, UPDATE_AGE, TOGGLE_CHECKBOX } from './action-types';

export const updateName = (name) => ({
    type: UPDATE_NAME,
    name
});

export const updateAge = (age) => ({
    type: UPDATE_AGE,
    age
});

export const toggleCheckbox = () => ({
    type: TOGGLE_CHECKBOX
});
