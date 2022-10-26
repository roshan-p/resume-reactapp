import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';


const reactImg = 'url(https://reactjs.org/logo-og.png) center / cover';
const cplus = 'url(https://www.ambiciative.com/assets/img/cimg.jpg) center / cover';
const nodeImg = 'url(https://bestinternet.co.th/img/blog/nodejs%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.jpeg) center / cover';
const ttbtouch = 'url(https://www.ttbbank.com/assets/half-assets/howto/autoloan-account-details/autoloan-account-details-01.jpg) center / cover'
const officemate = 'url(https://cdndtw.buzzebees.com/agencies/32879?time=20201031013000) center / cover';
const rinacente = 'url(https://wwd.com/wp-content/uploads/2020/06/00-homepage.jpg) center / cover';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <Row>
                    
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card" >
                            <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React Project #1</CardTitle>
                            <CardText>
                                React web app for my resume
                        </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/resume-reactapp" rel="noopener noreferrer" target="_blank">View on github</a></Button>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React Project #2</CardTitle>
                            <CardText>
                                React front end for chat application
                        </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/exam-frontend" rel="noopener noreferrer" target="_blank">View on github</a></Button>
                            </CardActions>

                        </Card>
                    </Col>

                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React Project #3</CardTitle>
                            <CardText>
                                Show real-time data with redux
                        </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/techcurve-test/tree/master/client" rel="noopener noreferrer" target="_blank">View on github</a></Button>
                            </CardActions>

                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React Project #4</CardTitle>
                            <CardText>
                                React hooks demo
                        </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/react-hooks-demo" rel="noopener noreferrer" target="_blank">View on github</a></Button>
                            </CardActions>

                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card" >
                            <CardTitle style={{ color: '#fff', height: '176px', background: ttbtouch }} ><h2 style={{marginTop:'120px', backgroundColor:'rgba(0, 0, 0, 0.5)' }}>Auto Loan</h2></CardTitle>
                            <CardText>
                                ttb touch autoloan module: Create Auto Loan Module for ttb touch app (created as a webview of mobile app by using Next.js)
                        </CardText>
                        <CardActions border >
                                <Button colored onClick><a href="https://apps.apple.com/th/app/ttb-touch/id884079963" rel="noopener noreferrer" target="_blank">App Store</a></Button>
                                <Button colored onClick><a href="https://play.google.com/store/apps/details?id=com.TMBTOUCH.PRODUCTION&hl=th&gl=US" rel="noopener noreferrer" target="_blank">Google Play</a></Button>

                            </CardActions>
                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: officemate }}><h2 style={{marginTop:'120px', backgroundColor:'rgba(0, 0, 0, 0.5)' }}>Officemate</h2></CardTitle>
                            <CardText>
                                Officemate is an online shopping website of Thailand.
                        </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://www.officemate.co.th/en" rel="noopener noreferrer" target="_blank">View Website</a></Button>
                            </CardActions>

                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: rinacente }}><h2 style={{marginTop:'120px', backgroundColor:'rgba(0, 0, 0, 0.5)' }}>Rinacente</h2></CardTitle>
                            <CardText>
                                Rinacente is an online clothes and accessories shopping website of Italy.
                        </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://www.rinascente.it/" rel="noopener noreferrer" target="_blank">View Website</a></Button>
                            </CardActions>

                        </Card>
                    </Col>
                </Row>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Row>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React-Native Project #1</CardTitle>
                            <CardText>
                                "Livvz" Property market plaform owned by Raimon Land Public Company Limited
                  </CardText>
                            <CardActions border >
                                <Button colored onClick><a href="https://apps.apple.com/th/app/livvz/id1465686975" rel="noopener noreferrer" target="_blank">App Store</a></Button>
                                <Button colored onClick><a href="https://play.google.com/store/apps/details?id=com.rml.livvz&hl=en_US" rel="noopener noreferrer" target="_blank">Google Play</a></Button>

                            </CardActions>
                        </Card>
                    </Col>

                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React-Native Project #2</CardTitle>
                            <CardText>
                                React-native with redux demo
                  </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/Blockchain-with-network-nodes" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                            </CardActions>
                        </Card>
                    </Col>

                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: reactImg }} >React-Native Project #3</CardTitle>
                            <CardText>
                                React-Native-GoogleMap-Demo
                  </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/React-Native-GoogleMap-Demo" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Row>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #1</CardTitle>
                            <CardText>
                                Blockchain Demo with 5 network nodes
              </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/Blockchain-with-network-nodes" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                            </CardActions>
                        </Card>
                    </Col>

                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #2</CardTitle>
                            <CardText>
                                Online shopping cart by using Node.js / Express / MongoDB
              </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/Online-Shopping-Cart" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                            </CardActions>
                        </Card>
                    </Col>

                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #3</CardTitle>
                            <CardText>
                                Back-end for chat application by using Node.js / Express / MongoDB (Graphql API)
              </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/exam-backend" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                            </CardActions>
                        </Card>
                    </Col>

                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: nodeImg }} >NodeJS #4</CardTitle>
                            <CardText>
                                Back-end for chart application by using Node.js / Express / MongoDB (REST API)
              </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/techcurve-test" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                            </CardActions>
                        </Card>
                    </Col>
                </Row>

            )
        } else if (this.state.activeTab === 3) {
            return (
                <Row>
                    <Col xs="12" md="6" lg="4">
                        <Card shadow={5} className="projects-card">
                            <CardTitle style={{ color: '#fff', height: '176px', background: cplus }} >C++ Project #1</CardTitle>
                            <CardText>
                                License plates detection with OpenCV
              </CardText>
                            <CardActions border>
                                <Button colored onClick><a href="https://github.com/roshan-p/LPDS" rel="noopener noreferrer" target="_blank">View on github</a></Button>

                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            )
        }
    }


    render() {
        return (
            <div>
                <Tabs className="projects-tab" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJS</Tab>
                    <Tab>React-Naitve</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>C++</Tab>
                </Tabs>
                <Container>
                    <div className="content">{this.toggleCategories()}</div>
                </Container>


            </div>
        )
    }
}

export default Projects;
