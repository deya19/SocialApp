import React from 'react'
import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">

        <img src="assets/Post/3.jpeg" alt="" className='profileCoverImg'/>
        <img src="assets/Person/7.jpeg" alt="" className='profileUserImg'/>

        </div>
        <div className="profileInfo">
          <h4 className='profileInfoName'>Deya'a Shaheen</h4>
          <span className='profileInfoDesc'>Hello my friends!</span>
        </div>
      </div>
      <div className="profileRightBottom">
      <Feed profile/>
      <Rightbar profile/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Profile