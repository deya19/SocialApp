import React from 'react'
import "./topbar.css"
import {Search,Person , Chat,Notifications} from '@mui/icons-material';
import { NavLink,Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className='topbarContainer'>
          <div className="topbarLeft">
          <span className="logo">Deyaabook</span>  
          </div> 
          <div className="topbarCenter">
          <div className="searchbar">
            <Search className='searchIcon' />
            <input placeholder='Search for friends, post or video' className="searchInput" />
          </div>  
          </div> 
          <div className="topbarRight">
           {/* <div className="topbarLinks">
           <NavLink to="/profile" className="topbarLink">Profile</NavLink> 
           <NavLink to="/" className="topbarLink" >Timeline</NavLink> 
           </div>   */}
           <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
           </div>
           <Link to="/profile" className="topbarLink">
           <img src="/assets/person/7.jpeg" alt="" className="topbarImg" />
           </Link>
          </div> 
    </div>
  );
}

export default Topbar