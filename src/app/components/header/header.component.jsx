import React from 'react'
import "./header.style.css"
import { HeaderOption } from '../header-option/header-option.component';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {

    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder="search" type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption onClick={logoutOfApp} avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="me"/>
            </div>
        </div>
    )
}

export { Header }

