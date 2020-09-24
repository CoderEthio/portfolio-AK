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


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    titleT: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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



    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4} >
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Full stack web-app
                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                Information sharing app
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Spring boot,React js,Redox, Axios
                            </Typography>
                            <Typography variant="body2" component="p">
                                It is a simple social media web-app.People can
                                <br />
                                 login,logout,sign up, and preform CRUD operation.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={"https://github.com/CoderEthio/chu-chu-backend"} target="_blank" >see backend code on github</Button>
                            <Button size="small" href={"https://github.com/CoderEthio/chu-chu-frontend"} target="_blank" >see frontend code on github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                               Game
                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                TicTocToe
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                assembley programming language with 32bit
                            </Typography>
                            <Typography variant="body2" component="p">
                                Game with computer with computer,computer with person
                                <br/>
                                ,and person with person mood.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={"https://github.com/CoderEthio/School-Project-AssembleyLanguage-86xProcesses-TicTocToe-Game"} target="_blank">see code on github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Database
                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                Movies Database
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                C++
                            </Typography>
                            <Typography variant="body2" component="p">
                                Read list of movies from csv file using binary search algorithem
                                <br/>
                                ,store them in to data structure to preform different task
                                <br/>
                                ,and store the result in to new file.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={"https://github.com/CoderEthio/School_Project-DataStructure-Movies-Database"} target="_blank">see code on github</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Frontend web-app
                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                Clone of Youtube frontend
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                React js, Redox , Axios
                            </Typography>
                            <Typography variant="body2" component="p">
                                It is a frontend web-app that consume youtube api
                                <br/>
                                and display youtube content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={"https://github.com/CoderEthio/youtube-frontend_api-call_react"} target="_blank">see code on github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Frontend web-app
                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                Image Finder
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                React, Redox, Axios
                            </Typography>
                            <Typography variant="body2" component="p">
                               It consumes unsplash api to search and display
                                <br/>
                                a list of image that much user keyword.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={"https://github.com/CoderEthio/api-call_data-display_picture-api_react"} target="_blank">see code on github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Frontend web-app
                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                Portfolio site
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                React, Material UI
                            </Typography>
                            <Typography variant="body2" component="p">
                                It is simple portfolio static site to show of a list
                                <br/>
                                of my projects with there github link and
                                <br/>
                                linkedin link.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={"https://github.com/CoderEthio/portfolio-ak"} target="_blank">see code on github</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                CI/CD
                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                Docker and kubernetes
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                images,container,network,service,Git Lab
                            </Typography>
                            <Typography variant="body2" component="p">
                                In progress ...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>

                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                Data analysis
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                pandas,python
                            </Typography>
                            <Typography variant="body2" component="p">
                                In progress ...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.bullet} style={{backgroundColor: "#ffffcc"}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>

                            </Typography>
                            <Typography variant="h5" component="h2" color={"primary"}>
                                ETL
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                               Apache Spark with java, Pentaho
                            </Typography>
                            <Typography variant="body2" component="p">
                                In progress ...
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        );
    }


    return (
        <div>
            <AppBar position="static" color={'transparent'}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <a href={'https://www.linkedin.com/in/aklom-desta50'} rel="noopener noreferrer" target="_blank"><LinkedInIcon color="primary"  fontSize="large"/> </a>

                    </IconButton>
                    <Typography variant="h6" className={classes.titleT}>
                    </Typography>
                    <Button  color="inherit" onClick={()=>{
                        auth.logout(()=>{
                            props.history.push("/")
                        })
                    }}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Grid container spacing={1} alignContent={"center"} >
                <Grid container item xs={12} spacing={3} alignItems={"center"}>
                    <FormRow />
                </Grid>
            </Grid>


        </div>
    )
}
export default ProjectPage;