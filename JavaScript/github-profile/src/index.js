import {getGitHubUser} from './fetching.js';
import {loadProfile} from './loadProfile.js';

const getJson = response => response.json();

const print = profile => profile.forEach(element => document.body.appendChild(element));

const getUser = userLogin => {
    return getGitHubUser(userLogin)
        .then(getJson)
        .then(loadProfile)
        .then(print)
        .catch(error => {
            alert(error);
            return Promise.reject(error)
        });
};

const userLogin = window.location.toString().split('?')[1];
getUser(userLogin);