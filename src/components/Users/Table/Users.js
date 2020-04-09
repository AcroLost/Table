import React, { useState } from 'react';
import './Users.scss';

import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const FadeInUp = styled.div`
    animation: 2s ${keyframes`${fadeInUp} `} `;


const Users = ({ users, determineAge, onFavourite, onUnfavourite }) => {

    const [userShow, setUserShow] = useState(10);

    const onScroll = (e) => {

        if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
            setUserShow(userShow + 10);
        }
    }

    const usersList = users.map((user) => {

        return <FadeInUp key={user.id}>
            <div className="user">

                <img className="photo"
                    src={require(`../../../images/${user.image}.svg`)}
                    alt="avatar" />
                <span>
                    {user.name}
                </span>
                <span>
                    {determineAge(user.age)}
                </span>
                <span>
                    {user.phone}
                </span>

                {user.favourite

                    ? <img onClick={() => onUnfavourite(user.id)}
                        className="favourite"
                        src={require('../../../images/fav_active.png')}
                        alt="favourite" />
                    : <img onClick={() => onFavourite(user.id)}
                        className="favourite"
                        src={require('../../../images/fav_inactive.png')}
                        alt="favourite" />
                }
            </div>
        </FadeInUp>
    });

    return (
        <div style={{ height: 590, overflowY: 'scroll' }} onScroll={onScroll}>
            {usersList.slice(0, userShow)}
        </div>
    );

}

export default Users;