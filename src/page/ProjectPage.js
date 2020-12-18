import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import auth from '../components/auth'
import { ThemeProvider } from '@material-ui/styles';


import { createMuiTheme } from '@material-ui/core/styles';
import withStyles from "@material-ui/core/styles/withStyles";


const theme = createMuiTheme({
    palette: {
        primary: {
            main:'#ddded9',
        },
    },
});


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:'20px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    titleT: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:'#fafafa',
        border:'groove',
        borderRadius:'25px'
    },
    title: {
        fontSize: 14,

    },
    pos: {
        marginBottom: 12,
    },
}));

const ProjectPage =(props)=>{

    const classes = useStyles();

    const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#fafafa',
    '&:hover': {
      backgroundColor:'#000000' ,
        color:'#ffffff'
    },
  },
}))(Button);


    return (
        <div>
            <ThemeProvider theme={theme}>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <a href={'https://www.linkedin.com/in/aklom-desta50'} rel="noopener noreferrer" target="_blank"><LinkedInIcon color="#C4C4C4"  fontSize="large"/> </a>

                    </IconButton>
                    <Typography variant="h6" className={classes.titleT}>
                    </Typography>
                    <ColorButton  variant="outlined" color="inherit" onClick={()=>{
                        auth.logout(()=>{
                            props.history.push("/")
                        })
                    }}>Logout</ColorButton>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
            <div className={classes.root}>
                      <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6} lg={4} >
                                <Card className={classes.card} style={{}}>
                                    <CardContent>
                                        <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                            Full stack web-app
                                        </Typography>
                                        <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                            Information sharing app
                                        </Typography>
                                        <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                            Spring boot,React js,Redox, Axios
                                        </Typography>
                                        <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                            It is a simple social media web-app.People can
                                            <br />
                                             login,logout,sign up, and preform CRUD operation.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Grid container spacing={2}>
                                          <Grid item xs={12} sm={6}>
                                                <ColorButton size="small" variant="outlined" style={{borderRadius:'25px', borderColor:'#e66322',}} href={"https://github.com/CoderEthio/chu-chu-backend"} target="_blank" >see backend code on github</ColorButton>
                                            </Grid>
                                         <Grid item xs={12} sm={6}>
                                                <ColorButton size="small" variant="outlined" style={{borderRadius:'25px',borderColor:'#e66322'}} href={"https://github.com/CoderEthio/chu-chu-frontend"} target="_blank" >see frontend code on github</ColorButton>
                                            </Grid>
                                    </Grid>


                                    </CardActions>
                                </Card>
                            </Grid>
                          <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Card className={classes.card} style={{}}>
                                    <CardContent>
                                        <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                           Game
                                        </Typography>
                                        <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                            TicTocToe
                                        </Typography>
                                        <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}} >
                                            assembley programming language with 32bit
                                        </Typography>
                                        <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                            Game with computer with computer,computer with person
                                            <br/>
                                            ,and person with person mood.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ColorButton size="small" style={{borderRadius:'25px',borderColor:'#e66322'}} variant="outlined" href={"https://github.com/CoderEthio/School-Project-AssembleyLanguage-86xProcesses-TicTocToe-Game"} target="_blank">see code on github</ColorButton>
                                    </CardActions>
                                </Card>
                             </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                                Database
                                            </Typography>
                                            <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                                Movies Database
                                            </Typography>
                                            <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                                C++
                                            </Typography>
                                            <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                                Read list of movies from csv file using binary search algorithem
                                                <br/>
                                                ,store them in to data structure to preform different task
                                                <br/>
                                                ,and store the result in to new file.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <ColorButton size="small" style={{borderRadius:'25px',borderColor:'#e66322'}} variant="outlined" href={"https://github.com/CoderEthio/School_Project-DataStructure-Movies-Database"} target="_blank">see code on github</ColorButton>
                                        </CardActions>
                                    </Card>
                         </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Card className={classes.card} style={{}}>
                                    <CardContent>
                                        <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                            Frontend web-app
                                        </Typography>
                                        <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                            Clone of Youtube frontend
                                        </Typography>
                                        <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                            React js, Redox , Axios
                                        </Typography>
                                        <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                            It is a frontend web-app that consume youtube api
                                            <br/>
                                            and display youtube content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ColorButton size="small" style={{borderRadius:'25px',borderColor:'#e66322'}} variant="outlined" href={"https://github.com/CoderEthio/youtube-frontend_api-call_react"} target="_blank">see code on github</ColorButton>
                                    </CardActions>
                                </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Card className={classes.card} style={{}}>
                                    <CardContent>
                                        <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                            Frontend web-app
                                        </Typography>
                                        <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                            Image Finder
                                        </Typography>
                                        <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                            React, Redox, Axios
                                        </Typography>
                                        <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                           It consumes unsplash api to search and display
                                            <br/>
                                            a list of image that matches user keyword.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <ColorButton size="small" style={{borderRadius:'25px',borderColor:'#e66322'}} variant="outlined" href={"https://github.com/CoderEthio/api-call_data-display_picture-api_react"} target="_blank">see code on github</ColorButton>
                                    </CardActions>
                                </Card>
                         </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card className={classes.card} style={{}}>
                                <CardContent>
                                    <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                        Frontend web-app
                                    </Typography>
                                    <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                        Portfolio site
                                    </Typography>
                                    <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                        React, Material UI
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                        It is simple portfolio static site to show of a list
                                        <br/>
                                        of my projects with there github link and
                                        <br/>
                                        linkedin link.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <ColorButton size="small" style={{borderRadius:'25px',borderColor:'#e66322'}} variant="outlined" href={"https://github.com/CoderEthio/portfolio-ak"} target="_blank">see code on github</ColorButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card className={classes.card} style={{}}>
                                <CardContent>
                                    <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                        CI/CD
                                    </Typography>
                                    <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                        Docker and kubernetes
                                    </Typography>
                                    <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                        images,container,network,service,Git Lab
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                        In progress ...
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                          <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card className={classes.card} style={{}}>
                                <CardContent>
                                    <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                            Final School Project/Full Stack WebApp
                                    </Typography>
                                    <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                        IRIS
                                    </Typography>
                                    <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                       Django , React js , React-Bootstrap-4
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                        Predictive analytics webapp for Rocky Mountain National Park
                                        <br/>
                                        In progress ...
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card className={classes.card} style={{}}>
                                <CardContent>
                                    <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                                 Final School Project/Part of Full Stack WebApp
                                    </Typography>
                                    <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                        Data analysis
                                    </Typography>
                                    <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                        pandas,python
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                        In progress ...
                                    </Typography>
                                </CardContent>
                              </Card>
                     </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card className={classes.card} style={{}}>
                                <CardContent>
                                    <Typography className={classes.title} style={{fontFamily:'Cinzel,serif',color:'#000000'}} gutterBottom>
                                            Final School Project/Part of Full Stack WebApp
                                    </Typography>
                                    <Typography variant="h4" component="h2" style={{color:"#1a1616",fontFamily:'Langar, cursive'}}>
                                        ETL
                                    </Typography>
                                    <Typography className={classes.pos} style={{fontFamily:'Pacifico, cursive',color:'#000000'}}>
                                       Apache Spark with Java/Python, Pentaho
                                    </Typography>
                                    <Typography variant="body2" component="p" style={{fontFamily:'PT Serif, serif',color:'#473030'}}>
                                        In progress ...
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                      </Grid>
            </div>

        </div>
    )
}
export default ProjectPage;