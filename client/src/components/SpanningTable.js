import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

function total(items) {
    return items.map(({ amount }) => amount).reduce((sum, i) => sum + i, 0);
}

// const rows = [
// //   createRow('Paperclips (Box)', 100, 1.15),
// //   createRow('Paper (Case)', 10, 45.99),
// //   createRow('Waste Basket', 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable(props) {
    const classes = useStyles();

    const viewImg = (id) =>  {
        props.viewImg(id);
    };

    const addImg = (id) => {
        props.addImg(id, props.categoryId);
    };

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.map(row => (
                        <TableRow key={row.name}>
                            <TableCell><Button onClick={row.img ? () => { viewImg(row.id) } : () => { addImg(row.id) }}>{row.img ? "View" : "Add"}</Button></TableCell>
                            <TableCell align="right">{moment(row.date).format("MM/DD/YYYY")}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{ccyFormat(row.amount)}</TableCell>
                        </TableRow>
                    ))}

                    {/* <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow> */}
                    {/* <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow> */}
                    <TableRow>
                        <TableCell colSpan={3} align="right">Total</TableCell>
                        <TableCell align="right">{ccyFormat(total(props.items))}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}