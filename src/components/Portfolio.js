import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
 } from "@material-ui/core"
import Navbar from "./Navbar";
import cmpe127 from "../images/cmpe127.jpg"

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 400,
        margin: "3rem",
        margin: "5rem auto"
    }
});

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component ="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify="center" >
                {/* Project 1*/}
                <Grid item xs={12} sm={4} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1 "
                                height="140"
                                image={cmpe127}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Project body
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button szie="small" color="primary"> 
                                    Live Demo
                                </Button>
                            </CardActions>

                    </Card>
                    </Grid>
                    {/* Project 2*/}
                <Grid item xs={12} sm={4} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={cmpe127}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Project body
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button szie="small" color="primary"> 
                                    Live Demo
                                </Button>
                            </CardActions>

                    </Card>
                </Grid>
                {/* Project 3*/}
                <Grid item xs={12} sm={4} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={cmpe127}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Project body
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button szie="small" color="primary"> 
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
                {/* Project 4*/}
                <Grid item xs={12} sm={4} >
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={cmpe127}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Project body
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button szie="small" color="primary"> 
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
 
export default Portfolio;

