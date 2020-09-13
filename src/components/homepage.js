import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
const myAvatar = process.env.PUBLIC_URL + '/my-avatar-2.png';

class Homepage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src={myAvatar}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p>React-Native | ReactJS | Redux | NodeJS | JavaScript | HTML/CSS | Firebase | MySQL</p>
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
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Homepage;