import React from 'react';
import UserListPreview from './UserListPreview';

import userJson from '../../profiles/user.json';
import userJson2 from '../../profiles/user2.json';
import userJson3 from '../../profiles/user3.json';
import userJson4 from '../../profiles/user4.json';

const users = [
    userJson,
    userJson2,
    userJson3,
    userJson4,
];

const UserList = () => users.map(
    user => (
        <UserListPreview
            key={user.id}
            avatar_url={user.avatar_url}
            login={user.login}
            html_url={user.html_url}
        />
    )
);

export default UserList;