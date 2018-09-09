import React, { Component } from 'react';
import Header from '../../Header';
import Content from '../../Content';
import UserList from './UserList';

class UserListApp extends Component {
    render() {
        return (
            <div className="App">
                <Header title="Users List" />
                <Content>
                    <UserList/>
                </Content>
            </div>
        );
    }
}

export default UserListApp;