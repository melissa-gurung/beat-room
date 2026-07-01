import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Mainlayout from './components/Mainlayout'
import Dashboard from './pages/Dashboard'
import MusicLibrary from './pages/MusicLibrary'
import VideoLibrary from './pages/VideoLibrary'
import Artists from './pages/Artists'
import Albums from './pages/Albums'
import Genres from './pages/Genres'
import Users from './pages/Users'
import Subscriptions from './pages/Subscriptions'
import SubscriptionPlans from './pages/SubscriptionPlans'
import Purchases from './pages/Purchases'
import Coupons from './pages/Coupons'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/MusicLibrary" element={<MusicLibrary />} />
          <Route path="/VideoLibrary" element={<VideoLibrary />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Subscriptions" element={<Subscriptions />} />
          <Route path="/SubscriptionPlans" element={<SubscriptionPlans />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Coupons" element={<Coupons />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
