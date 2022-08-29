import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'


function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className='birthdayImg' />
          <span className='birthdayText'><b>Pola Fost</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img src="/assets/ad.png" alt="" className='rightbarAd'/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
         {Users.map((u) => (
          <Online key={u.id} user = {u}/>
         ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return (
    <>
    <h4 className='rightbarTitle'>User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItme">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Amman</span>
      </div>
      <div className="rightbarInfoItme">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Amman.Jordan</span>
      </div>
      <div className="rightbarInfoItme">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className='rightbarTitle'>User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/Person/1.jpeg" alt="" className='rightbarFollowingImg' />
        <span className="rightbarFollowingName">lele Camrla</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/Person/2.jpeg" alt="" className='rightbarFollowingImg' />
        <span className="rightbarFollowingName">John Carter</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/Person/3.jpeg" alt="" className='rightbarFollowingImg' />
        <span className="rightbarFollowingName">Nataly Fedral</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/Person/4.jpeg" alt="" className='rightbarFollowingImg' />
        <span className="rightbarFollowingName">Lina Carer</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/Person/5.jpeg" alt="" className='rightbarFollowingImg' />
        <span className="rightbarFollowingName">Lora Carte</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/Person/6.jpeg" alt="" className='rightbarFollowingImg' />
        <span className="rightbarFollowingName">Latena Car</span>
      </div>
    </div>
    </>
    )
  }
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
      {profile? <ProfileRightbar/>:<HomeRightbar/>}
       </div>
    </div>
  )
}

export default Rightbar