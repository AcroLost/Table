import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';

import { inputChangeAC, setFilterAC, setGrowthAC } from '../../redux/usersReducer';


const FilterContainer = ({ inputChangeAC, path, setFilterAC, filter, setGrowthAC, growth }) => {

    return (
        <Filter onInputChange={inputChangeAC}
            onFilterChange={setFilterAC}
            path={path}
            filter={filter}
            onGrowthChange={setGrowthAC}
            growth={growth} />
    );
}


const mapStateToProps = (state) => {
    return {
        path: state.usersList.path,
        filter: state.usersList.filter,
        growth: state.usersList.growth
    }
}

export default connect(mapStateToProps,
    { inputChangeAC, setFilterAC, setGrowthAC })(FilterContainer);