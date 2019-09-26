// import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }

// ReactDOM.render(<App />, document.querySelector('#app'));



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Advertising</Typography>
                    <Typography className={classes.secondaryHeading}>i.e.(Social media ads, Posters, Flyers, PR, Business Cards, Stage Banner </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    <form>
                            <label>
                                Date:
    <input type="text" name="Date" />

                                Purchased Location
    <input type="text" name="Purchased At" />

                                Amount Spent
    <input type="text" name="Purchased At" />



                            </label>


                            <input type="submit" value="Submit" />
                        </form>
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Contract Labor</Typography>
                    <Typography className={classes.secondaryHeading}> i.e. (Pay to band members, Session Artist, Production, Studio time. Over 600 will require 1099 filing)


                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <form>
                            <label>
                                Date:
    <input type="text" name="Date" />

                                Purchased Location
    <input type="text" name="Purchased At" />

                                Amount Spent
    <input type="text" name="Purchased At" />



                            </label>


                            <input type="submit" value="Submit" />
                        </form>


                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Equipment</Typography>
                    <Typography className={classes.secondaryHeading}>i.e.(Amps, Computer, Guitars, Drums, Keyboard, Recording Gear,Speakers note:if over 1,000 for item may depreciate)
                        
          </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                    <form>
                            <label>
                                Date:
    <input type="text" name="Date" />

                                Purchased Location
    <input type="text" name="Purchased At" />

                                Amount Spent
    <input type="text" name="Purchased At" />



                            </label>


                            <input type="submit" value="Submit" />
                        </form>
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>Personal data</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}