import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import sitelogo from '../../assets/images/site-logo.jpg';
export const Footer=()=>{
    return(<>
        <div className={classes.footerWrapper}>
            <footer className={classes.sitefooter} id='footer'>
                <div className={classes.bottomfooter}>
                    <div className={classes.container}>
                        <div className={classes.textcenter}>
                            <div className={classes.footerlogo}>
                                <Link to="/" title='logo'>
                                    <img src={sitelogo} alt="sitelogo"/>
                                </Link>
                            </div>
                            <p className={classes.copyrighttext}>
                                &copy; 2023 . All right reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>)
}