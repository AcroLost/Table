import React from 'react';
import { connect } from 'react-redux';
import UsersPreview from './UsersPreview';

import { favouriteAC, unfavouriteAC, setPathAC, setFilterAC } from '../../../redux/usersReducer';
import { searchPerson, determineAgeHelper, filter } from '../../../utils/helpers';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UsersPreviewContainer = ({ path, users, input, favouriteAC, unfavouriteAC, setPathAC, setFilterAC, growth }) => {

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
        <UsersPreview users={visibleUsers}
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

    })(UsersPreviewContainer);