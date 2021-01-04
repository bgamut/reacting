import React,{ Component } from 'react';
import TopBar from "./components/TopBar";
import FooterMenu from './components/FooterMenu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import logo from './logo.svg';
// import bars from './bars-solid.svg'
import bars from './bars-solid.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import {Button,AppBar,Toolbar,IconButton,Typography,Drawer} from '@material-ui/core';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      windowWidth:0,
      windowHeight:0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize",this.updateDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener("resize",this.updateDimensions);
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    this.setState({ windowWidth, windowHeight });
  }
  updateDimensions(){

  }
  render(){
    const { windowWidth } = this.state;
    const sidebarCollapsed = windowWidth < 1100;
    const styles={
      white:(opacity=1) => 'rgba(255,255,255), ${opacity}',
      black:(opacity=1)=>'rgba(0,0,0,${opacity})',
      topBarHeight:40,
      footerMenuHeight:50,
      showFooterMenuText:windowWidth>500,
      showSidebar:windowWidth>768,
      sidebarCollapsed,
      sidebarWidth:sidebarCollapsed ? 50 :150
    }
    const menuItems=[
        { icon: `😀`, text: "Item 1" },
        { icon: `😉`, text: "Item 2" },
        { icon: `😎`, text: "Item 3" },
        { icon: `🤔`, text: "Item 4" },
        { icon: `😛`, text: "Item 5" }
    ]
    if (styles.showSidebar){
      menuItems.push({ icon: `😺️`, text: "Profile" });
      menuItems.push({ icon: `⚙`, text: "Settings" });
    }
  // return (
  //   <div className="App">
  //     <header className="App-header">
        
  //     <AppBar position="fixed">
  //       <Toolbar>
  //         {/* <IconButton edge="start" className="iconMenu" color="inherit" aria-label="menu"> */}
            
  //         {/* </IconButton> */}
  //         {/* <Typography variant="h6" className="iconNews">
  //           News
  //         </Typography> */}
  //         <Container>
  //           <Row>
  //             <Col xs={1}>
  //               <Button>
  //               {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //                 <img src={bars} className="Menu-bar" alt="menu bar"/>
  //               </Button>
  //             </Col>
  //             {/* <Col xs={8}> */}
  //             <Col xs={11}>
  //             </Col>
  //             {/* <Col xs={2}>
  //               <Button color="inherit">Menu</Button>
  //             </Col> */}
  //           </Row>
  //         </Container>
  //       </Toolbar>
  //     </AppBar>
  //       <Container>
          
  //         <Row>
  //           <Col xs={12} md={4}> 
  //             <Button>
  //               one 
  //             </Button>
  //           </Col>
  //           <Col xs={12} md={4}> 
  //             <Button>
  //               two
  //             </Button>
  //           </Col>
  //           <Col xs={12} md={4}> 
  //             <Button>
  //               three
  //             </Button>
  //           </Col>
  //         </Row>
  //       </Container>
       
  //     </header>
  //   </div>
  // );
  return (
      <div
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        {styles.showSidebar ? (
          <Sidebar menuItems={menuItems} styles={styles} />
        ) : (
          <TopBar styles={styles} />
        )}

        <Content styles={styles} />

        {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )}
      </div>
    );
  }
}

export default App;
