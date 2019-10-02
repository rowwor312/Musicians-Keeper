import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';


const ranges = [
    {
      value: '0-20',
      label: '0 to 20',
    },
    {
      value: '21-50',
      label: '21 to 50',
    },
    {
      value: '51-100',
      label: '51 to 100',
    },
  ];
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      flexBasis: 200,
    },
  }));
  export default function FilledInputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };


    return (
      <div className={classes.root}>
        <TextField
          id="filled-simple-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          label="First Name"
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
         <TextField
          id="filled-simple-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          label="Last Name"
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
           <TextField
          id="filled-simple-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          label="Create UserName"
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
         <TextField
          id="filled-simple-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          label="Email Address"
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <TextField
          id="filled-adornment-password"
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          type={values.showPassword ? 'text' : 'password'}
          label="Create Password"
          value={values.password}
          onChange={handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="filled-adornment-password"
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          type={values.showPassword ? 'text' : 'password'}
          label="Re-Enter Password"
          value={values.password}
          onChange={handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="secondary" className={classes.button}>
          Sign Up
        </Button>
      </div>
    );
  } 

