import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
const blockChainImg = 'url(https://tokeny.pl/wp-content/uploads/2018/10/blockchain_featured.jpeg) center / cover';
const reactImg = 'url(https://reactjs.org/logo-og.png) center / cover';
const cplus = 'url(https://www.educative.io/api/page/5393602882568192/image/download/6038586442907648) center / cover';
const nodeImg = 'url(https://bestinternet.co.th/img/blog/nodejs%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.jpeg) center / cover';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (

                <div className="projects-grid">

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React Project #1</CardTitle>
                        <CardText>
                            React web app for my resume
                        </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/resume-reactapp" rel="noopener noreferrer" target="_blank">View on github</a></Button>
                            {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
                        </CardActions>
                        {/* <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu> */}
                    </Card>
                      <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React Project #2</CardTitle>
                        <CardText>
                            React front end for chat application
                        </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/exam-frontend" rel="noopener noreferrer" target="_blank">View on github</a></Button>
                        </CardActions>
                      
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React Project #3</CardTitle>
                        <CardText>
                           Show real-time data with redux
                        </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/techcurve-test/tree/master/client" rel="noopener noreferrer" target="_blank">View on github</a></Button>
                        </CardActions>
                      
                    </Card>
                </div>


            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React-Native Project #1</CardTitle>
                        <CardText>
                            "Livvz" Property market plaform owned by Raimon Land Public Company Limited
                  </CardText>
                        <CardActions border >
                            <Button colored onClick><a href="https://apps.apple.com/th/app/livvz/id1465686975" rel="noopener noreferrer" target="_blank">App Store</a></Button>
                            <Button colored onClick><a href="https://play.google.com/store/apps/details?id=com.rml.livvz&hl=en_US" rel="noopener noreferrer" target="_blank">Google Play</a></Button>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React-Native Project #2</CardTitle>
                        <CardText>
                            React-native with redux demo
                  </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/Blockchain-with-network-nodes" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React-Native Project #3</CardTitle>
                        <CardText>
                            React-Native-GoogleMap-Demo
                  </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/React-Native-GoogleMap-Demo" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #1</CardTitle>
                        <CardText>
                            Blockchain Demo with 5 network nodes
              </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/Blockchain-with-network-nodes" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #2</CardTitle>
                        <CardText>
                            Online shopping cart by using Node.js / Express / MongoDB
              </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/Online-Shopping-Cart" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #3</CardTitle>
                        <CardText>
                            Back-end for chat application by using Node.js / Express / MongoDB (Graphql API)
              </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/exam-backend" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #4</CardTitle>
                        <CardText>
                            Back-end for chart application by using Node.js / Express / MongoDB (REST API)
              </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/techcurve-test" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                        </CardActions>
                    </Card>
                </div>

            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: cplus }} >C++ Project #1</CardTitle>
                        <CardText>
                            License plates detection with OpenCV
              </CardText>
                        <CardActions border>
                            <Button colored onClick><a href="https://github.com/roshan-p/LPDS" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                        </CardActions>
                    </Card>
                </div>
            )
        }



    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJS</Tab>
                    <Tab>React-Naitve</Tab>
                    <Tab>ฺNodeJS</Tab>
                    <Tab>C++</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;
