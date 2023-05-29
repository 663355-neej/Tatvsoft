import { AppBar, ListItem, List, Button, TextField } from '@mui/material';
import React, { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RoutePaths } from '../../utils/enum';
import sitelogo from '../../assets/images/site-logo.jpg';
import cartlogo from '../../assets/images/cart-icon.png';
import { NavigationItems } from "../../utils/shared";
import classes from './Header.module.css';
export const Header = () => {
    const items = useMemo(() => {
        return NavigationItems;
    }, []);
    const openMenu = () => {
        document.body.classList.toggle("open-menu");
    }
    return (<>
        <div className={classes.headerWrapper}>
            <AppBar className={classes.siteheader} id='header' position="static">
                <div className={classes.topheader}></div>
                <div className={classes.bottomheader}>
                    <div className={classes.container}>
                        <div className={classes.headerwrapper}>
                            <div className={classes.logowrapper}>
                                <Link to="/" className={classes.sitelogo} title='logo'>
                                    <img src={sitelogo} alt='sitelogo'></img>
                                </Link>
                            </div>
                            <div className={classes.navwrapper}>
                                <List className={classes.topnavbar}>
                                    <ListItem>
                                        <Button variant="contained">
                                            <NavLink to={RoutePaths.Login} title="Login" className={classes.textcolor}>Login</NavLink></Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant="contained">
                                            <NavLink to={RoutePaths.Register} title="Register" className={classes.textcolor}>Register</NavLink>
                                        </Button>
                                    </ListItem>
                                    <ListItem><TextField id="search" label="Search Book" variant="outlined" className={classes.textfield} size='small'/></ListItem>
                                    <ListItem className={classes.btnstyle}><Button variant='contained' color='success' size='medium' >Search </Button></ListItem>

                                </List>

                            </div>  
                        </div>
                    </div>
                </div>

            </AppBar>
        </div>
    </>)
}