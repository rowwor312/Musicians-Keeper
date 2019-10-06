import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const TAX_RATE = 0.07;

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}



function total(items) {
    return items.map(({ amount }) => amount).reduce((sum, i) => sum + i, 0);
}

export default function SpanningTable(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                       
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.map(row => (
                        <TableRow key={row.name}>

                            <TableCell align="right">{moment(row.date).format("MM/DD/YYYY")}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{ccyFormat(row.amount)}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{ccyFormat(total(props.items))}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}