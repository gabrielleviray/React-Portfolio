// 

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import maze_platform from "../images/maze_platform.png"
import maze_robot from "../images/maze_robot.jpeg"

// import Markdown from "./Markdown";


const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});








// const social = ["GitHub", "Twitter", "Facebook"];

function project1(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          <Typography
            variant="headline"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Microprocessor Design
          </Typography>
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="h4" color="inherit" gutterBottom>
                    Line Follower Maze Robot
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    Using TI Robotics Systems Learning Kit, a colleague and I designed a <i>Line Follower Maze Robot </i>  
                     that meaneuvers through a maze by accurately following a solid line and taking the necessary
                    path to reach the final destination. It can also use the walls to detect when it strays far from the line. 
                  </Typography>
                  {/* <Typography variant="title" color="inherit">
                    Continue reading.
                  </Typography> */}
                </div>
              </Grid>
              <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <center>
                        <img src={maze_robot} height="225" width="375" ></img>
                    </center>
                  </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="overline" display="block" >
                Testing Platform Layout
              </Typography>
              <Divider />
              <br></br>
              <img src={maze_platform} height="275" width="475" ></img>
              <br></br>

              <Typography variant="overline" display="block">
                Development Plan, Integration, and Testing
              </Typography>
              <Divider />
                  <br>
                  </br>
                <i>Top-Down Approach - Five Design Phases:</i>
              <ul>
                    <li>Analysis (Specify Requirements, Specifications, and Constraints)</li>
                    <li>High-level design (Strategies, Algorithms, Abstraction)</li>
                    <li>Low-level design (Data structures, Flow Charts, Header files)</li>
                    <li>Implementation (Modularity)</li>
                    <li>Testing (Control and Observability) </li>
                </ul>                  
                
              <br>
              </br>
                <i>Integration:</i>
              <ul>
                  <li> GPIO to interface the line sensor </li>
                  <li> SysTick periodic interrupts for the line sensor </li>
                  <li> Bump sensors, Motors and PWM</li>
              </ul>

                <i>Testing:</i>
                <br>
                </br>
                <blockquote>
                    <p>After completing the code for the main program including the various driver files
                    needed to control the hardware, it was necessary to integrate, test and fine tune the system. Each component
                    was tested individually such as the line and bump sensors. In order to test the line sensor, we used
                    the debugging tools provided in Code Composer studio to monitor the values of the sensor in real time.
                    Bump sensors were integrated with TimerA1 interrupts and tested to make sure an interrupt was triggered whenever
                    a bump switch was activated.</p> 
                </blockquote>
              <Typography variant="overline" display="block">
                Results
              </Typography>
              <Divider />

            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="overline" gutterBottom>
                  Technologies Used: 
                </Typography>
                <ul>
                    <li>Code Composure Studio</li>
                    <li>C Programming Language</li>
                </ul>
                <Typography variant="overline" gutterBottom>
                    Hardware Materials Used :
                </Typography>
                <ul>
                    <li>MSP432P401R MCU LaunchPad</li>
                    <li>Robot chassis, DC motors and wheels</li>
                    <li>Rechargeable battery, 6-pack, metal hydride, 1300 mAh, 1.2 V, AA</li>
                    <li>Motor drive and power distribution board</li>
                    <li>Line IR sensors</li>
                    <li>Bump sensors</li>
                </ul>
              </Paper>
              <Typography
                variant="title"
                gutterBottom
                className={classes.sidebarSection}
              >
              </Typography>
              <Typography
                variant="title"
                gutterBottom
                className={classes.sidebarSection}
              >
                {/* Social */}
              </Typography>
              {/* {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))} */}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subheading"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

project1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(project1);
