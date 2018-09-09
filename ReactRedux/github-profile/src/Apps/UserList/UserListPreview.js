import React from 'react';

const UserListPreview = ({ avatar_url, login, html_url }) => (
    <div className="user-list-preview">
        {avatar_url && <img src={avatar_url} alt={login} className="user-list-preview--img"/> }
        <div className="user-list-preview--user_info">
            <a href={"?" + login}>
                <h1 className="user-list-preview--user_login">
                    {login}
                </h1>
            </a>
            <a href={html_url} target="_blank" className="user-list-preview--user_url">
                {html_url}
            </a>
        </div>
        <div className="clear" />
    </div>
);

export default UserListPreview;