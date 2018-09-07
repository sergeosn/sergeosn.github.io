export const getGitHubUser = userLogin => fetch(
    `https://api.github.com/users/${userLogin}`
);