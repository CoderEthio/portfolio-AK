import React from "react";
import auth from '../components/auth'
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core";
import {
    Grid,
    Typography,
    Modal,
    Backdrop,
    Fade,
    TextField
} from "@material-ui/core";
import ArrowDownward from "@material-ui/icons/ArrowDownward";


const useStyle = makeStyles(theme => ({
    root: {
        marginTop: '300px',
        [theme.breakpoints.up("lg")]:{
            marginTop: '400px'
        },
         [theme.breakpoints.down("lg")]:{
            marginTop: '300px'
        }
    },
    text: {
        fontFamily: "Berkshire Swash , cursive",
        color:"#3A1B0B",
        [theme.breakpoints.down("sm")]: {
            fontSize: 35
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 20
        }
    },
    subtext: {
        fontFamily: "Berkshire Swash , cursive",
        [theme.breakpoints.down("sm")]: {
            fontSize: 15
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 12
        }
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3)
    }
}));

const LandingPage = (props) => {
    const classes = useStyle();
    const [open, setOpen] = React.useState(false);

    //const [passcode_input, setInput] = React.useState("");



    const { control, handleSubmit } = useForm();
    const [isPasswordVerified , setIsPasswordVerified ] = React.useState(false);

    console.log(isPasswordVerified)

    const inPasswordStyle =
        {
            id: "outlined-error-helper-text",
            label: "Error",
            helperText: "Incorrect Pass Code",
            error: "error"
        }



    const onSubmit = data => {
        if (data.password.toString().toLowerCase() === "thanks") {
            setIsPasswordVerified(false)
            auth.login(()=>{
                props.history.push('/projects')
            })
        } else {
            setIsPasswordVerified(true)
                //
        }
    };

    const inputController =   isPasswordVerified
        ? <Controller
                error
                id={inPasswordStyle.id}
                lable={inPasswordStyle.label}
                type="password"
                as={TextField}
                autoComplete="current-password"
                variant="outlined"
                control={control}
                helperText={inPasswordStyle.helperText}
                name="password"
                defaultValue=""
            />
        : <Controller
            id="filled-password-input"
            label="Insert pass code"
            type="password"
            autoComplete="current-password"
            as={TextField}
            variant="outlined"
            control={control}
            name="password"
            defaultValue=""
        />


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
             <div className={classes.root}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <Typography
                            variant="h3"
                            component="h3"
                            align="center"
                            className={classes.text}
                        >
                            I have no special talent.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" component="h3" className={classes.text}>
                            I am only passionately curious.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            align="left"
                            variant="subtitle1"
                            component="h3"
                            className={classes.subtext}
                            style={{color: "#E05E17"}}
                        >
                            Albert Einstein
                        </Typography>
                    </Grid>
                    <Grid item style={{paddingTop: 40}}>
            <span onClick={handleOpen}>
              <ArrowDownward/>
            </span>
                    </Grid>
                </Grid>
            </div>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500
            }}
                >
                <Fade in={open}>
                <div className={classes.paper}>
                <h3 id="transition-modal-title">PassCode):</h3>
                <div id="transition-modal-description">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                {inputController}

                </form>
                </div>
                </div>
                </Fade>
                </Modal>
        </React.Fragment>
    );
};

export default LandingPage;
