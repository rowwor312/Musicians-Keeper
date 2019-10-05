import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Navbar from "../Navbar";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));


export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [data, setData] = React.useState([]);


    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    };

    const handleInput = (id) => {
        let newExpense= {
            name:document.querySelector("#name"+id).value,
            date:document.querySelector("#date"+id).value,
            amount:document.querySelector("#amount"+id).value,
            categoryId: id
        }  
        const accessString = localStorage.getItem('JWT');
        axios.post("/api/expense",newExpense,
            { headers: { Authorization: `${accessString}` } }).then(res => {
                console.log(res.data)
               

            })

    }


    useEffect(function onLoad() {
        const accessString = localStorage.getItem('JWT');
        axios.get("/api/expense",
            { headers: { Authorization: `${accessString}` } }).then(res => {
                console.log(res.data)
                setData(res.data)

            })

    }, [])

    const setName = ((event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    })

    //onButtonSubmit = (event) => {
    const getJWT = ((event) => {
        event.preventDefault();
        const accessString = localStorage.getItem('JWT');
        axios.post("/api/expenses", {
            date: this.state.date,
            name: this.state.name,
            amount: this.state.amount
        },
            {


                headers: {
                    headers: { Authorization: `JWT ${accessString}` }
                }
            }).then(res => {
                let newExpenses = this.state.expenses.concat([res.data])
                this.setState({ expenses: newExpenses, date: "", purchasedLocation: "", amount: "" })



            })
    })

    // const saveProduct = ((product) => {
    //     product.id = new Date().getTime();
    //     this.setState((prevState) => {
    //       let products = prevState.products;
    //       products[product.id] = product;
    //       return { products };
    //     })

    //     this.saveProduct = this.saveProduct.bind(this);
    //     <ProductForm onSave={this.saveProduct} />

    return (


        <div className={classes.root}>
            <Navbar />
            {data.map((ele, idx) => {
                return (<ExpansionPanel expanded={expanded === 'panel' + ele.id} onChange={handleChange('panel' + ele.id)} key={idx}> 
                <ExpansionPanelSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>{ele.name}</Typography>
                    <Typography className={classes.secondaryHeading}>{ele.description}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={"customFormContainer"}>

                    <TextField id={"date" + ele.id} className={classes.textField} label="Date" margin="normal" />
                    <TextField id={"name" + ele.id} className={classes.textField} label="Name" margin="normal" />
                    <TextField id={"amount" + ele.id} className={classes.textField} label="Amount" margin="normal" />
                    <Button variant="contained" color="black" margin="normal" onClick={() => { handleInput(ele.id) }} className={`${classes.button}` + " formButton"} />


                </ExpansionPanelDetails>
            </ExpansionPanel>)
            })}
            

        </div>



    );




};




