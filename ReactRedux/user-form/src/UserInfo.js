import React from 'react';
import { connect } from 'react-redux';
import { stateToProps } from './helper';

const UserInfo = ({ name, age, isStudent }) => (
  <div className="row">
    <div className="col-sm-6 textarea">
      <samp>
        {isStudent ? 'Student ' : ''}
        {name}
        {' is '}
        {age}
        {' years old.'}
      </samp>
    </div>
  </div>
);

export default connect(stateToProps)(UserInfo);