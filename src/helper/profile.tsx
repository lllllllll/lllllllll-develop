import React from 'react'
import { Settings } from 'react-feather'

const Profile = () => {
  return (
    <div className="box profile">
      <div className="pic">
        {/* <img src="./images/profile.jpg" alt="" /> */}
      </div>
      <div className="title">YAKAChang</div>
      <div className="act">
        <button>Profile</button>
        <button className="outline">
          <Settings size="18" />
        </button>
      </div>
    </div>
  )
}

export default Profile