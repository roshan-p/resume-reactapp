import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout >
    <Header className="header-color" title={<Link className="nav-btn" to="/">Ro's World</Link>} scroll>
            <Navigation>
            <Link className="nav-btn" to="/resume">Resume</Link>
            <Link className="nav-btn" to="/aboutme">About me</Link>
            <Link className="nav-btn" to="/projects">Projects</Link>
            <Link className="nav-btn" to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Ro's World</Link>}>
            <Navigation>
            <Link style={{textDecoration: 'none', color: 'grey'}} to="/resume">Resume</Link>
            <Link style={{textDecoration: 'none', color: 'grey'}} to="/aboutme">About me</Link>
            <Link style={{textDecoration: 'none', color: 'grey'}} to="/projects">Projects</Link>
            <Link style={{textDecoration: 'none', color: 'grey'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
