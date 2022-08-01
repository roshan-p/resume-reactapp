import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import EmailForm from "./forms/emailForm";
const myAvatar = process.env.PUBLIC_URL + "/my-avatar-2.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Roshan Pandey (Ro)</h2>
            <img src={myAvatar} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              90/416 Soi Watluang Wognsawang Road Bangsue District Bangkok 10800
              Thailand
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <i
                      className="fa fa-phone-square"
                      aria-hidden="true"
                      style={{ fontSize: "40px", paddingRight: "10px" }}
                    />
                    <div
                      style={{
                        fontSize: "25px",
                        fontFamily: "Anton",
                        textAlign: "left",
                      }}
                    >
                      (+66) 832-360-493
                    </div>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{ fontSize: "40px", paddingRight: "10px" }}
                    />
                    <div
                      style={{
                        fontSize: "25px",
                        fontFamily: "Anton",
                        textAlign: "left",
                        wordBreak:"break-all"
                      }}
                    >
                      roshan007191@gmail.com
                    </div>
                  </ListItemContent>
                </ListItem>
              </List>
              <hr />
              {/* <EmailForm /> */}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
