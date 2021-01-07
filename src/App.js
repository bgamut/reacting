import React,{ Component } from 'react';
import TopBar from "./components/TopBar";
import FooterMenu from './components/FooterMenu'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
// import logo from './logo.svg';
// import bars from './bars-solid.svg'
// import bars from './bars-solid.png'
import imageOne from "./components/assets/1.jpg" 
import imageTwo from "./components/assets/2.jpg"
import imageThree from "./components/assets/3.jpg"  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
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
        <div
          style={{
            overflow:'hidden',
            height:'600vw+40px',
            width:'100vw',
            paddingTop:40
          }}
        >
        <Carousel
        showArrows={false} 
        showStatus={false} 
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4500}
        transitionTime={500}
        emulateTouch={true}
        stopOnHover={false}
        //swipeScrollTolerance={1}
        useKeyboardArrows={true}
        //centerSlidePercentage={10}
        >
          <div
            style={{
              overflow:'hidden',
              height:'62vw',
              width:'100vw',
              transform:[{
                translateX:0,
              },
              {
                //translateY:-(height+150)/2,
                //translateY:-(height+extraHeight)/2
                translateY:40
              }]
            }}
          >
              
              {/* <div
                      style={{
                        width:'100%',
                        height:"100%",
                        transform:[{
                            translateX:0,
                        },
                        {
                            //translateY:-(height+150)/2,
                            //translateY:-(height+extraHeight)/2
                            translateY:"40px"
                        },

                        
                    
                      ],
                      zIndex:100,
                      }}
                      
                      >
                        
                      
                      <a
                        //className='Unselectable'
                        style={{
                          // backgroudColor:'purple',
                          textDecorationLine:'none',
                          color:'white',
                          fontWeight:'700',
                          fontSize: 25,
                          textShadowColor: 'rgba(0, 0, 0, 1)',
                          textShadowOffset: {width: 0, height: 0},
                          textShadowRadius: 2,
                          textAlign:'center',
                          alignItems:'center',
                          justifyContent:'center',
                          flexDirection:'row',
                          userSelection:'none',
                          zIndex:100,
                        }}
                      >
                        Get the Sound You Want
                      </a>
                      </div> */}
                      <div
                        style={{
                          width:'100%',
                          height:"100%",
                          transform:[{
                              translateX:0,
                          },
                          {
                              //translateY:-(height+150)/2,
                              //translateY:-(height+extraHeight)/2
                              translateY:"-100vh"
                          },
  
                          
                      
                        ],
                        zIndex:100,
                        }}
                      >
                        <img src={imageOne} />
                      </div>
          </div>

          <div
            style={{
              overflow:'hidden',
              height:'62vw',
              width:'100vw',
              transform:[{
                translateX:0,
              },
              {
                //translateY:-(height+150)/2,
                //translateY:-(height+extraHeight)/2
                translateY:40
              }]
            }}
          >
              <img src={imageTwo} />
              
          </div>
          <div
            style={{
              overflow:'hidden',
              height:'62vw',
              width:'100vw',
              
            }}
          >
              <img src={imageThree} />
             
          </div>
        </Carousel>
        </div>
        
        <div
                  // ref={heightRef}
                  style={{
                    height:345,
                    width:"100%",
                    padding:15,
                    
                    backgroundColor:'transparent',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundImage: 'radial-gradient(farthest-corner at 50% 50%,rgb(242,235,242),rgb(186,214,227))'
                  }}
                >
                  <div 
                    align='center'
                    style={{
                      height:"100%",
                      width:"100%",
                      justifyContent:'center',
                      alignItems:'center',
                      zIndex:0,
                      backgroundColor:'transparent',
                      marginTop:"auto",
                      paddingLeft:'auto',
                      paddingRight:'auto',
                      paddingBottom:'auto',
                      borderColor:'#aaa',
                      display:'block',
                      // borderStyle:'solid',
                      overflow:'hidden',
                      boxSizing:"border-box",
                      transform:[{
                        translateX:"100vw",
                    },
                    {
                        translateY:0,
                    }]
                    }}
                  >
                    {/* <GoogleDeck 
                      
                      shareButtonPressed={props.shareOverlayToggle}
                      slackHashButtonPressed={props.slackHashOverlayToggle}
                      commentButtonPressed={props.commentOverlayToggle}
                      starButtonPressed={props.starOverlayToggle}
                      XAlign={XAlign}
                    /> */}
                    <iframe style={{display:'block'}} width="560" height="315" src="https://www.youtube.com/embed/FJDnzobxXVA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                      
                    </iframe>
                  </div>
                </div>
                <div 
          style={{
            // backgroudColor:'purple',
            textDecorationLine:'none',
            color:'white',
            fontWeight:'700',
            fontSize: 25,
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 2,
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            userSelection:'none',
            zIndex:100,
          }}
        >
          {/* <Button onPress={()=>{ alert('clicked') }}>
            download
          </Button> */}
          <a 
          style={{
            fontWeight:700,
            textDecorationLine:'none',
            //color:'white',
            textDecorationLine:'none',
            textDecorationStyle:'none',
            color:'rgb(195,195,195)',
            fontSize: 15,
            marginLeft:5,
          }}
          href="https://drive.google.com/file/d/1LxbBH-I8OyQUAdNioa4dBDpk4BAUS5mL/view?usp=sharing">
            <Button
              style={{
                fontWeight:700,
                textDecorationLine:'none',
                //color:'white',
                textDecorationLine:'none',
                textDecorationStyle:'none',
                color:'rgb(195,195,195)',
                fontSize: 15,
                marginLeft:5,
              }}
            >
              <i class="fa fa-download" aria-hidden="true"></i> download
            </Button>  
          </a>
        </div>
        <div class="container"
                style={{
                    width:"100%",
                    height:"100%",
                    backgroundColor:"transparent",
                    //justifyContent:'center',
                    //alignItems:'left',
                    flexDirection:'row'
                }}
            >
                <div 
                style={{ 
                // height:100,
                //width:(Dimensions.get('window').width-8),
                //width:500,
                //height:250,
                width:'100%',
                height:'100%',
                flexDirection:'column',
                padding:15,
                backgroundColor:'transparent',
                
                //justifyContent:'center',
                //alignItems:'left',
                // marginRight:8,
                // marginLeft:8,
                // marginBottom:2,
                // borderRadius:4,
                // borderBottom:2,
                // borderTop:1,
                // borderColor:'#aaa',
                // borderStyle:'solid',
                // overflow:'hidden',
                // boxSizing:"border-box",
                // shadowColor:'#000',
                // shadowOpacity:0.25,
                // shadowRadius:2,
                // shadowOffset:{
                // width:0,
                // height:0
                // },
                // elevation:2
            }} >

      
                    {/* <div href="https://www.Contac.com/squwbs/?hl=ko" ref={imgRef}/> */}
                    <div
                        style={{
                            backgroundColor:'transparent',
                            width:'100%'
                        }}
                    >
                    <a style={{           
                            textDecorationLine:'none',
                            textDecorationStyle:'none',
                            height:"100%",
                            width:"100%",
                            
                          }} href="mailto:bernardahn@squwbs.com" >
                      
                      
                    <div 
                        style={{

                            //justifyContent:"center",
                            //alignItems:"center",
                            //backgroundColor:'transparent',
                            backgroundColor:'transparent',
                        }}
                    >
                   
                  
                    {/* <Text
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            color:'white',
                            fontSize: 10,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                        Contact
                    </Text> */}
                    
                    <div    
                        style={{
                            height:'100%',
                            width:'100%',
                            //justifyContent:'center',
                            //alignItems:'center',
                            backgroundColor:'transparent'
                        }}>
                   
                    <div
                     style={{
                         flexDirection:'row',
                         backgroundColor:'transparent',
                         //alignItems:'center',
                         //justifyContent:'center'
                     }}
                    >
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 8,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    > 
                        <div
                            style={{
                                //justifyContent:'center',
                                //alignItems:'center',
                                backgroundColor:'transparent',
                                transform:[{
                                    //translateX:45,
                                    translateX:0,
                                },
                                {
                                    translateY:2,
                                }]
                            }}
                        >
                            {/* <i class="fas fa-envelope"></i> */}
                        </div>
                        
                    </a>
                    <div
                        style={{
                            height:'100%',
                            weight:330,
                            //justifyContent:'center',
                            //alignItems:'center',
                            backgroundColor:'transparent'
                        }}
                    >
                    
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                        <i class="fas fa-envelope"></i>
                        
                    </a> 
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                        
                        bernardahn@squwbs.com
                    </a> 
                    </div>
                </div>
                </div>
                    </div>
                    

                    </a>
                    </div>
                    <div
                        style={{
                            backgroundColor:'transparent',
                            width:'100%'
                        }}
                    >
                    <a
                        style={{
                            textDecorationLine:'none',
                            textDecorationStyle:'none',
                            height:"100%",
                            width:"100%"
                        }}
                    href="tel:821055981367">
                    <div
                     style={{
                        flexDirection:'row',
                        backgroundColor:'transparent',
                        //alignItems:'center',
                        //justifyContent:'center'
                     }}
                    >
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 8,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    > 
                        <div
                            style={{
                                //justifyContent:'center',
                                //alignItems:'center',
                                backgroundColor:'transparent',
                                transform:[{
                                    //translateX:45,
                                    translateX:0,
                                },
                                {
                                    translateY:2,
                                }]
                            }}
                        >
                            {/* <i class="fas fa-phone"></i> */}
                        </div>
                        
                    </a>
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                           // color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                         <i class="fas fa-phone"></i>
                       
                    </a> 
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                           // color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                         
                        821055981367
                    </a> 
                </div>
                </a>
                    </div>
                    <div
                        style={{
                            backgroundColor:'transparent',
                            width:'100%'
                        }}
                    >
                <a style={{           
                            textDecorationLine:'none',
                            textDecorationStyle:'none',
                            height:"100%",
                            width:"100%"
                          }} href="https://goo.gl/maps/wovCEykLbfhgtTQz8" >
                      
                      
                    <div 
                        style={{

                            //justifyContent:"center",
                            //alignItems:"center",
                            backgroundColor:'transparent'
                        }}
                    >
                   
                  
                    
                    <div    
                        style={{
                            height:'100%',
                            width:'100%',
                            //justifyContent:'center',
                            //alignItems:'center',
                            backgroundColor:'transparent'
                        }}>
                   
                    <div
                     style={{
                         flexDirection:'row',
                         backgroundColor:'transparent',
                         //alignItems:'center',
                         //justifyContent:'center'
                     }}
                    >
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 8,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    > 
                        <div
                            style={{
                                //justifyContent:'center',
                                //alignItems:'center',
                                backgroundColor:'transparent',
                                transform:[{
                                    //translateX:45,
                                    translateX:0,
                                },
                                {
                                    translateY:2,
                                }]
                            }}
                        >
                            {/* <i class="fas fa-home"></i> */}
                        </div>
                        
                    </a>
                <div
                    style={{
                        flexDirection:'column'
                    }}
                >
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                      <i class="fas fa-home"></i>
                      
                    </a>
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                      
                       302-1302 213 bungil 5 
                    </a>
                    <div>
                    <a
                        style={{
                           
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                        Jeongjail-ro Bundang-gu
                    </a>
                    </div>
                    <div>
                    <a
                        style={{
                        
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                    Seongnam-si Gyeonggi-do
                    </a>
                    </div>
                    <div>
                    <a
                        style={{
                        
                            fontWeight:700,
                            textDecorationLine:'none',
                            //color:'white',
                            color:'rgb(195,195,195)',
                            fontSize: 10,
                            marginLeft:5,
                            // textShadowColor: 'rgba(0, 0, 0, 0.5)',
                            // textShadowOffset: {width: 0, height: 0},
                            // textShadowRadius: 3,
                        }}
                    >
                        R.O.K 13556
                    </a> 
                    </div>
                </div>
                </div>
                </div>
                    </div>
                    

                    </a>
                    </div>
                </div>
              </div>
        {/* <Content styles={styles} /> */}

        {/* {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )} */}
      </div>
    );
  }
}

export default App;
