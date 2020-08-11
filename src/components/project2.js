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
import mp3_block_diagram from "../images/mp3_block_diagram.png"
import mp3_tasks from "../images/mp3_tasks.png"
import embedded_mp3 from "../images/embedded_mp3.jpg"
import button_functionalities from "../images/button_functionalities.JPG"
import telemetry from "../images/telemetry.JPG"
import before_packaging from "../images/before_packaging.jpg"
import after_packaging from "../images/after_packaging.jpg"
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

function project2(props) {
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
                    Embedded MP3 Player 
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    The goal of this project was to develop a fully functional MP3 Player using the <i>SJTwo Microcontroller. </i>
                    The MP3 files to be played, are stored on an SD card where the SJTwo is able to read and transfer the data 
                    contained in the files to an audio decoding peripheral for generating music. Users are able to control 
                    the music (such as stopping, pausing, and playing music) and access information about the current song on the
                    display.
                  </Typography>
                  {/* <Typography variant="title" color="inherit">
                    Continue reading.
                  </Typography> */}
                </div>
              </Grid>
              <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <img src={embedded_mp3} height="225" width="375" ></img>
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
                Block Diagram
              </Typography>
              <Divider />
              <br></br>
              <blockquote>
                  A 5 V Breakout is needed to power on the 16 x 2 LCD and Decoder. Used GPIO to set the 
                  LCD's internal registers. Buttons are interrupt enabled. The microcontroller transfers data
                  to the decoder over SPI.
                </blockquote>
              <center> <img src={mp3_block_diagram} height="275" width="475" ></img></center>
              <br></br>

              <Typography variant="overline" display="block">
                Design
              </Typography>
              <Divider />
              <blockquote>
                  When the user presses any of the four buttons, the button interrupt
                  service routine(ISR) is triggered. The button ISR checks the status bit
                  of each port/pin that caused the interrupt and sends the port/pin to a button 
                  command queue. A debouncing mechanism was used that checks is the ISR happened
                  to quickly. If so, the command is not sent to the queue.
                  <br></br>
                  <br></br>
                  The button task checks which button was pressed and the current menu that the
                  user is on. Based off the button number and current menu, the LCD display is updated
                  or in some cases (such as volume, treble, and bass) the decoder is updated.
              </blockquote>
              <br></br>
              <center><img src={mp3_tasks} height="350" width="450" ></img></center>
              <br></br>

              <i>RTOS tasks</i>
              <blockquote>
                  <li>Button Task: Has the highest task priority. Processes button commands from
                      'button command queue' and updates LCD or decoder depending on current menu. 
                  </li>
                  <br></br>
                  <li>Read Task: Lowest priority. Proceesses songs the 'song name queue', opens the song file
                      from SD card, and transfers song data 512 bytes at a time to song data queue.
                  </li>
                  <br></br>
                  <li>Play Task: Priority less than 'Button Task' and greater than 'Read Task.' Reads data
                      from 'song data queue' and sends data to the decoder. Every 32 bytes, we check if DREQ is 
                      busy. If DREQ is not busy, we send the data using SPI.
                  </li>
                  
              </blockquote>

              <Typography variant="overline" display="block">
                Button Functionalities
              </Typography>
              <Divider />
              <br></br>
              <center><img src={button_functionalities} height="300" width="550" ></img></center>
              <br></br>
              <Typography variant="overline" display="block">
                CPU Utilization
              </Typography>
              <Divider/>
              <br></br>
              <blockquote>
                  CPU utilization was under 50%.
              </blockquote>
              <center><img src={telemetry} height="200" width="400" ></img></center>
              <br></br>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="overline" gutterBottom>
                  Software Technologies Used: 
                </Typography>
                <ul>
                    <li>Sublime</li>
                    <li>Telemetry - <a href = "https://sjsu-dev2.github.io/Telemetry/" target = "_blank">SJSU Telemetry</a></li>
                    <li>C Programming Language</li>
                </ul>
                <Typography variant="overline" gutterBottom>
                    Hardware Components :
                </Typography>
                <ul>
                    <li>SJTwo Board</li>
                    <li>16 x 2 Character LCD Display</li>
                    <li>Decoder - VS1053B</li>
                    <li>5 V Breakout</li>
                    <li>Speaker</li>
                    <li>External Power Bank</li>
                </ul>
              </Paper>
              <br></br>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="overline" gutterBottom>
                      MP3 Features
                  </Typography>
                  <ul>
                    <li>On Startup: Displays a random greeting message</li>
                    <li>Six menus</li>
                        <ol>
                            <li>Song Titles</li>
                            <li>Now Playing (Displays Song State, Song Title)</li>
                            <li>Progress Bar</li>
                            <li>Volume</li>
                            <li>Treble</li>
                            <li>Bass</li>
                        </ol>
                    <li>Multi-functional buttons for each menu</li>
                    <li>Autoplay: Plays the next song after a song finishes</li>
                </ul>
              </Paper>
              <br></br>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="overline" gutterBottom>
                      Enclosure 
                  </Typography>
                  <br></br>
                  <br></br>
    
                    <center>Before Packaging</center>
                    <br></br>
                    <center><img src={before_packaging} height="150" width="275" ></img></center>
                    <br></br>

                    <center>After Packaging</center>
                    <br></br>
                    <center>
                        <img src={after_packaging} height="150" width="125" ></img>
                        <img src={embedded_mp3} height="150" width = "150"></img>
                    </center>
                    
                  

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

project2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(project2);
