import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
AppBar,
Toolbar,
ListItem,
ListItemIcon,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";

// CSS STYLES
const mkStyles = makeStyles({
    menuDropdownContainer: {
        width: 250,
        background: "#511",
        height: "100%" 
    },
    listItem: {
        color: "tan"
    }
});

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"   
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }

]
const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSideBar = (sideComponent, open) => () =>{
        setState({...state, [sideComponent]: open});
    }
    const classes = mkStyles()
    
    const sideBar = sideComponents => (
        <Box className= {classes.menuDropdownContainer} component="div">
            <Avatar src="" alt=""/>
            <Divider />
            <List>
                {menuItems.map((lsItem,key)=>(
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItem} 
                            primary={lsItem.listText}
                        />
                    </ListItem>
                    ))}
                </List>
        </Box>
        
    );
    return (
        <>

        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSideBar("right", true)}>
                        <ArrowBack style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSideBar("right", false)}>
                            {sideBar("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}

export default Navbar
