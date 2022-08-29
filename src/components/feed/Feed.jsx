import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import{Posts} from "../../dummyData"
import Post2 from '../Post2/Post2'




function Feed({profile}) {

    const HomeFeed =() =>{
      return(
        <>
        <Share/>
        {Posts.map(p => (
          <Post key={p.id} post ={p}/>
        ))}
        </>
      )
    }


    const ProfileFeed = () =>{
      return(
        <>
        <Share/>
        {Posts.map(p => (
          <Post2 key={p.id} post ={p}/>
        ))}
        </>
      )
    }

  return (
    <div className='feed'>
        <div className="feedWrapper">
          {/* <Share/>
          {Posts.map(p => (
            <Post key={p.id} post ={p}/>
          ))} */}
          {profile? <ProfileFeed/>:<HomeFeed/>}
        </div>
    </div>
  )
}

export default Feed;