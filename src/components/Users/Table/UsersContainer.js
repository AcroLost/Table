import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { favouriteAC, unfavouriteAC, setPathAC, setFilterAC } from '../../../redux/usersReducer';

import { searchPerson, determineAgeHelper, filter } from '../../../utils/helpers';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UsersContainer = ({ path, users, input, growth, favouriteAC, unfavouriteAC, setPathAC, setFilterAC }) => {

    useEffect(() => {
        setPathAC(path);
        setFilterAC(sort);
    })

    let { sort } = useParams();

    const determineAge = (age) => {
        return determineAgeHelper(age);
    }

    const visibleUsers = filter(searchPerson(users, input), sort, growth);

    return (
        <Users users={visibleUsers}
            determineAge={determineAge}
            onFavourite={favouriteAC}
            onUnfavourite={unfavouriteAC} />
    );
}

const mapStateToProps = (state) => {

    return {
        users: state.usersList.users,
        input: state.usersList.input,
        growth: state.usersList.growth
    }
}

export default connect(mapStateToProps,
    {
        favouriteAC, unfavouriteAC,
        setPathAC, setFilterAC

    })(UsersContainer);