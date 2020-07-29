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
        // margin: "5rem auto"
    },
    subContainer: {
        maxWidth: "400",
        height: "50%"
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
                                <Button size="small" color="primary" href="/project1">
                                    About
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
                                <Button size="small" color="primary"> 
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

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';

// const images = [
//   {
//     url: '../images/cmpe127.jpg',
//     title: 'Project 1',
//     width: '40%',
//   },
//   {
//     url: '../images/cmpe127.jpg',
//     title: 'Project2',
//     width: '30%',
//   },
//   {
//     url: './',
//     title: 'Camera',
//     width: '30%',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     minWidth: 300,
//     width: '100%',
//   },
//   image: {
//     position: 'relative',
//     height: 200,
//     [theme.breakpoints.down('xs')]: {
//       width: '100% !important', // Overrides inline-style
//       height: 100,
//     },
//     '&:hover, &$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15,
//       },
//       '& $imageMarked': {
//         opacity: 0,
//       },
//       '& $imageTitle': {
//         border: '4px solid currentColor',
//       },
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   },
//   imageTitle: {
//     position: 'relative',
//     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
//   },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   },
// }));

// export default function ButtonBases() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       {images.map((image) => (
//         <ButtonBase
//           focusRipple
//           key={image.title}
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={{
//             width: image.width,
//           }}
//         >
//           <span
//             className={classes.imageSrc}
//             style={{
//               backgroundImage: `url(${image.url})`,
//             }}
//           />
//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton}>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={classes.imageTitle}
//             >
//               {image.title}
//               <span className={classes.imageMarked} />
//             </Typography>
//           </span>
//         </ButtonBase>
//       ))}
//     </div>
//   );
// }