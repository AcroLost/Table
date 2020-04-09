import { updateFavourite } from '../utils/helpers';
import { usersPage } from '../service/service';

const FAVOURITE = 'users/FAVOURITE',
    UNFAVOURITE = 'users/UNFAVOURITE',
    INPUT_FILTER = 'users/INPUT_FILTER',
    SET_PATH = 'users/SET_PATH',
    SET_FILTER = 'users/SET_FILTER',
    SET_GROWTH = 'users/SET_GROWTH',
    SET_USERS = 'users/SET_USERS';

const initialState = {
    users: [],
    filter: 'ID',
    input: '',
    path: 'table',
    growth: 'Up'
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FAVOURITE:

            return {
                ...state,
                users: updateFavourite(state.users, action.userId, 'id', { favourite: true })
                // users: state.users.filter((u) => {

                //     if (u.id === action.userId) {
                //         return { ...u, favourite: true }
                //     }
                //     return u
                // })
            }

        case UNFAVOURITE:

            return {
                ...state,
                users: updateFavourite(state.users, action.userId, 'id', { favourite: false })
                // users: state.users.filter((u) => {
                //     if (u.id === action.userId) {
                //         return { ...u, favourite: false }
                //     }
                //     return u
                // })
            }

        case INPUT_FILTER:

            return {
                ...state,
                input: action.inputValue
            }

        case SET_PATH:

            return {
                ...state,
                path: action.path
            }

        case SET_FILTER:

            return {
                ...state,
                filter: action.filter
            }

        case SET_GROWTH:

            return {
                ...state,
                growth: action.growth
            }

        case SET_USERS:

            return {
                ...state,
                users: action.users
            }

        default:
            return state;
    }
}

export const favouriteAC = (userId) => {
    return { type: FAVOURITE, userId }
}

export const unfavouriteAC = (userId) => {
    return { type: UNFAVOURITE, userId }
}

export const inputChangeAC = (inputValue) => {
    return { type: INPUT_FILTER, inputValue }
}

export const setPathAC = (path) => {

    return { type: SET_PATH, path }
}

export const setFilterAC = (filter) => {
    return { type: SET_FILTER, filter }
}

export const setGrowthAC = (growth) => {
    return { type: SET_GROWTH, growth }
}

export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

export const setUsersThunk = () => {
    return async (dispatch) => {

        const users = await usersPage.getUsers()
        dispatch(setUsersAC(users))
    }
}

export default usersReducer;