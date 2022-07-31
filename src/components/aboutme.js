import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl';

const myAvatar = process.env.PUBLIC_URL + '/my-avatar-2.png';

class Aboutme extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={myAvatar}
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Roshan Pandey</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Developer (React+Node.js) </h4>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                        <h5>My Interests</h5>
                        <List>
                            <ListItem>
                                <ListItemContent><i  style={{ fontSize: '2em' }} className="fa fa-book " aria-hidden="true"/> Manga</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent><i  style={{ fontSize: '2em' }} className="fa fa-tv " aria-hidden="true"/> Anime</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent><i  style={{ fontSize: '2em' }} className="fa fa-code " aria-hidden="true"/> Programming</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent><i  style={{ fontSize: '2em' }} className="fa fa-heart " aria-hidden="true"/> Gym</ListItemContent>
                            </ListItem>
                        </List>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Aboutme;
