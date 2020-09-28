import React, { Component, useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import { useTransition, animated } from 'react-spring'
const myAvatar = process.env.PUBLIC_URL + '/my-avatar-2.png';

function Homepage() {
    const [show, setShow] = useState(false);
    const [showAvatar, setShowAvatar] = useState(false);
    const transitions = useTransition(true, null, {
        from: { opacity: 0 },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await next({ opacity: 1 })
        },
        leave: { opacity: 0 },
    });
    const avatarTransitions = useTransition(true, null, {
        from: { opacity: 0 },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, 500));
            await next({ opacity: 1 })
        },
        leave: { opacity: 0 },
    })
    useEffect(() => {
        setShowAvatar();
        setShow();
    }, []);

    return (

        <div style={{ width: '100%', margin: 'auto', overflow: 'scroll' }}>
            <Grid className="home-grid">

                <Cell col={12}>
                    {avatarTransitions.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={props}>
                            <img
                                src={myAvatar}
                                alt="avatar"
                                className="avatar-img"
                            />
                        </animated.div>)}
                    {transitions.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={props}>
                            <div className="banner-text">
                                <h1>Full Stack Developer</h1>
                                <hr />
                                <p>React-Native | ReactJS | Redux | NodeJS | JavaScript | HTML/CSS | Firebase | MySQL | MongoDB | REST | Graphql</p>
                                <div className="social-links">

                                    <a href="https://www.linkedin.com/in/roshan-pandey-690a2813b/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square socialBtn" arai-hidden="true" />
                                    </a>
                                    <a href="https://github.com/roshan-p" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square socialBtn" arai-hidden="true" />
                                    </a>
                                    <a href="https://wwww.facebook.com/roshan-hellverse" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-facebook-square socialBtn" arai-hidden="true" />
                                    </a>

                                </div>
                            </div>
                        </animated.div>)}
                </Cell>
            </Grid>
        </div >

    )

}
export default Homepage;