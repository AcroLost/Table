import React from 'react';

import './UserPreview.scss';
import { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const FadeInUp = styled.div`
    animation: 2s ${keyframes`${fadeInUp} `} `;

const UsersPreview = ({ determineAge, users, onFavourite, onUnfavourite }) => {

    const [userShow, setUserShow] = useState(5);
    const [autoPlay, setAutoplay] = useState(false);

    const onScroll = (e) => {

        if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
            setUserShow(userShow + 5);
        }

        const source = document.querySelectorAll('source');

        if (autoPlay === false) {
            for (let i = 0; i < source.length; i++) {

                const video = source[i].closest('video').getBoundingClientRect();

                if (video.y >= 200 && video.y <= 400) {
                    source[i].closest('video').play();
                } else {
                    source[i].closest('video').pause();
                }
            }
        }

    }

    const stopAutoplay = () => {
        setAutoplay(true);
    }


    const usersList = users.map((user) => {

        return <FadeInUp key={user.id}>
            <div className="preview">
                <div className="preview__left">

                    <div className="preview__header">
                        <img className="photo"
                            src={require(`../../../images/${user.image}.svg`)}
                            alt="avatar" />

                        <span>{user.name} </span>

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

                    <div>
                        <p>{determineAge(user.age)} </p>
                        <p>{user.phone} </p>
                        <p>{user.phrase}</p>
                    </div>

                </div>
                {user.video &&

                    <div className="preview__right">
                        <video onClick={stopAutoplay} controls="controls">
                            <source src={require(`../../../videos/${user.video}.mp4`)} />
                        </video>
                    </div>
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

export default UsersPreview;