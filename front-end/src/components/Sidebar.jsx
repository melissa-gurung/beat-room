import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div>
            <img src="front-end/src/assets/logo.jpg" alt="logo" />
        </div>
      <div>
        <ul>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/MusicLibrary">Music Library</NavLink></li>
            <li><NavLink to="/VideoLibrary">Video Library</NavLink></li>
            <li><NavLink to="/Artists">Artists</NavLink></li>
            <li><NavLink to="/Albums">Albums</NavLink></li>
            <li><NavLink to="/Genres">Genres</NavLink></li>
            <li><NavLink to="/Users">Users</NavLink></li>
            <li><NavLink to="/Subscriptions">Subscriptions</NavLink></li>
            <li><NavLink to="/SubscriptionPlans">Subscription Plans</NavLink></li>
            <li><NavLink to="/Purchases">Purchases</NavLink></li>
            <li><NavLink to="/Coupons">Coupons</NavLink></li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Sidebar
