import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropType from 'prop-types';
import axios from 'axios';
import 'date-fns';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'theme.palette.secondary.main',
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    lockicon: {
        alignItems: 'center'
    },
    errorMessage: {
        color: 'red'
    },

}));

export default function ScheduleBody(props) {
    const classes = useStyles();
    const [formErrors, setFormErrors] = useState({ name: " ", email: " ", phonenumber: " ", service: "", datetime: " " });
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    const [phonenumber, setPhonenumber] = useState(null);
    const [name, setName] = useState(null);
    const [service, setService] = useState(null);
    const [datetime, setDatetime] = useState(null);

    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const formValid = () => {
        let valid = true;

        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });

        // validate the form was filled out
        Object.values(formErrors).forEach(val => {
            val === null && (valid = false);
        });
        if (name === null || name === " ") {
            valid = false;
        };
        if (phonenumber === null || phonenumber === " ") {
            valid = false;
        };

        return valid;
    };

        // handle button click of Schedule form
    const handleSChedule = () => {
        setError(null);
        let serviceError = false;

        axios.post('http://localhost:5000/schedule/appointment', { name: name.toLowerCase(), email: email, phonenumber: phonenumber, service: service, datetime: datetime }).then(response => {
        }).catch(error => {
            if (error.response.status === 401) {
                setError('Check your appointment entries');
                serviceError = true;
            }
            else {
                setError("Something went wrong. Please try again later.")
                serviceError = true;
            }
        });
        if (!serviceError) {
            alert("Appointment Booked Successfully!");
            window.location.href = "/"   
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (formValid()) {
            handleSChedule();
            //window.location.href = "/"
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
            setError("Invalid SChedule Details. Please check.");
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrorsx = { formErrors };
        switch (name) {
            case "name":
                formErrorsx.name =
                    value.length < 1 ? "User Name required" : "";
                setName(value);
                break;
            case "email":
                formErrorsx.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                setEmail(value);
                break;
            case "phonenumber":
                formErrorsx.phonenumber =
                    value.length < 9 ? "minimum 9 digits required" : "";
                setPhonenumber(value);
                break;

            case "datetime":
                    setDatetime(value);
                    break;
            case "service":
                    setService(value);
            default: break;
        }
        setFormErrors(formErrorsx);
    
    };
    
    useEffect(() => { }, []);

    return (
        <div> 
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar} >
                <TodayTwoToneIcon style={{color:"#ff0000"}}/>
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.lockicon} >
                        Schedule Appointment
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            className={formErrors.name !== "" ? "error" : null}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Patient Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={handleChange}
                        />
                        {formErrors.name !== "" && (
                            <span className={classes.errorMessage}>{formErrors.name}</span>
                        )}
                        <TextField
                            className={formErrors.email !== "" ? "error" : null}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            //autoFocus
                            onChange={handleChange}
                        />

                        {formErrors.email !== "" && (
                            <span className={classes.errorMessage}>{formErrors.email}</span>
                        )}
                        <TextField
                            className={formErrors.phonenumber !== "" ? "error" : null}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="phonenumber"
                            label="Patient Phonenumber"
                            name="phonenumber"
                            autoComplete="phonenumber"
                            //autoFocus
                            onChange={handleChange}
                        />

                        {formErrors.phonenumber !== "" && (
                            <span className={classes.errorMessage}>{formErrors.phonenumber}</span>
                        )}
                        <TextField
                            className={formErrors.service !== "" ? "error" : null}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="service"
                            label="Enter Consultation Service:" 
                            name="service"
                            autoComplete="service"
                            //autoFocus
                            onChange={handleChange}
                        >                           
                        </TextField>

                        <TextField
                            className={formErrors.datetime !== "" ? "error" : null}
                            required
                            fullWidth
                            id="datetime"
                            name="datetime"
                            label="Next appointment"
                            autoComplete="datetime"
                            type="datetime-local"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                        {error && (
                            <span className={classes.errorMessage}>{error}</span>
                        )}
            </form>

            </div>
            </Container>
        </div>
           );
};


ScheduleBody.prototype = {
    classes: PropType.object.isRequired,
};