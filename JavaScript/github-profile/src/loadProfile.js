export const loadProfile = (profile) =>
    new Promise(
        (resolve, reject) => {
            const img = document.createElement('img');
            img.src = profile.avatar_url;
            img.style.border = '1px solid #000';
            const userName = document.createElement('h1');
            userName.innerHTML = profile.name;
            const userLogin = document.createElement('h2');
            userLogin.innerHTML = profile.login;
            const company = document.createElement('p');
            company.innerHTML = profile.company;
            const location = document.createElement('p');
            location.innerHTML = profile.location;
            const someText = document.createElement('p');
            someText.innerHTML = 'Statistics:';
            someText.style.fontWeight = 'bold';
            const repos = document.createElement('p');
            repos.innerHTML = 'Repositories: ' + profile.public_repos;
            const following = document.createElement('p');
            following.innerHTML = 'Following: ' + profile.following;
            const followers = document.createElement('p');
            followers.innerHTML = 'Followers: ' + profile.followers;

            const resultProfile = [
                img,
                userName,
                userLogin,
                company,
                location,
                someText,
                repos,
                following,
                followers
            ];

            img.onload = () => {
                resolve(resultProfile);
            };
            img.onerror = error => {
                reject(alert('Cannot load image'))
            };
        }
    );