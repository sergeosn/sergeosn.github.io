import React from 'react';
import UserProfilePreview from './UserProfilePreview';

import userJson from '../../profiles/user.json';
import userJson2 from '../../profiles/user2.json';
import userJson3 from '../../profiles/user3.json';
import userJson4 from '../../profiles/user4.json';

const getUserProfilePreview = function({username}) {
    let user;

    switch (username) {
        case 'sergeosn':
            user = userJson;
            break;
        case 'DScheglov':
            user = userJson2;
            break;
        case 'AsterAI':
            user = userJson3;
            break;
        case 'shpax':
            user = userJson4;
            break;
        default:
            user = {
                "name": "Sorry user was not found.",
            }
    }

    return <UserProfilePreview
        avatar_url={user.avatar_url}
        name={user.name}
        login={user.login}
        company={user.company}
        location={user.location}
        public_repos={user.public_repos}
        following={user.following}
        followers={user.followers}
    />
};

const UserProfile = ({username}) => getUserProfilePreview({username});

export default UserProfile;