import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import EmailForm from "./forms/emailForm";

const myAvatar = process.env.PUBLIC_URL + "/my-avatar-2.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} className="contact-left">
            <h2>Roshan Pandey (Ro)</h2>
            <img src={myAvatar} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em", textAlign: "center" }}>
              90/416 Soi Watluang Wognsawang Road Bangsue District Bangkok 10800
              Thailand
            </p>
          </Cell>

          <Cell col={6} className="contact-right">
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="contact-item">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    <span>(+66) 832-360-493</span>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="contact-item">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>roshan007191@gmail.com</span>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;