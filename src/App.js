import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout >
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Ro's World</Link>} scroll>
            <Navigation>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/resume">Resume</Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/aboutme">About me</Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/projects">Projects</Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/contact">Contact</Link>
                {/* <a href="/resume">Resume</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a> */}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'grey'}} to="/">Ro's World</Link>}>
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
//     <div style={{height: '300px', position: 'relative'}}>
//    <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
// </div>
  );
}

export default App;
