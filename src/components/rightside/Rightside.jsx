import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import classes from './rightside.module.css'

import { capitalizeFirstLetter } from '../../util/capitalizeFirstLetter'

const Rightside = () => {
  const [friends, setFriends] = useState([])
  const {user, token} = useSelector((state) => state.auth)
  const API="https://socailmedia-new-be.onrender.com"
console.log(friends);
  useEffect(() => {
    const fetchFriends = async() => {
      try {
        const res = await fetch(`${API}/user/find/friends`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const data = await res.json()

        setFriends(data)        
      } catch (error) {
        console.error(error)
      }
  }
  fetchFriends()
  }, [user.followings])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {friends?.length > 0 ? (
          friends?.map((friend) => (
             <Link className={classes.user} to={`/profileDetail/${friend._id}`} key={friend._id}>
              <img src={`${API}/images/${friend.profileImg}`} className={classes.profileUserImg}/>
              <div className={classes.userData}>
                <span>{capitalizeFirstLetter(friend.username)}</span>
              </div>
             </Link>
          ))
        )
         : <span>You currently have no friends. Follow someone!</span>}
      </div>
    </div>
  )
}

export default Rightside