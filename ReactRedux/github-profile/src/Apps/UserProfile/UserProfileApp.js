import React, { Component } from 'react';
import Header from '../../Header';
import Content from '../../Content';
import UserProfile from './UserProfile';

class UserProfileApp extends Component {
    render() {
        return (
            <div className="App">
                <Header title="User Profile" />
                <Content>
                    <UserProfile username={window.location.toString().split('?')[1]}/>
                </Content>
            </div>
        );
    }
}

export default UserProfileApp;