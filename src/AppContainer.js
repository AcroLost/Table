import React, { useEffect } from 'react';
import './App.scss';

import App from './App';
import { connect } from 'react-redux';
import { setUsersThunk } from './redux/usersReducer';

const AppContainer = ({ filter, path, setUsersThunk }) => {

  useEffect(() => {
    setUsersThunk()
  }, []);

  return (
    <App filter={filter}
      path={path} />
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.usersList.filter,
    path: state.usersList.path
  }
}


export default connect(mapStateToProps, { setUsersThunk })(AppContainer);
