import { Route, Routes, useLocation } from 'react-router-dom'

import Home from '../screen/home'
import News from '../screen/news'
import Login from '../Components/login/Login'
import Registration from '../Components/Registration/Registration'
import RoutesAnimationLayout from '../Components/RoutesAnimationLayout'
import { BackofficeRoutes } from './BackofficeRoutes'
import Activities from '../screen/activities'
import { ActivitiesId } from '../screen/activitiesId/ActivitiesId'



const Routing = () => {
  const location = useLocation()
  return (
    <RoutesAnimationLayout locationKey={location.key}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/backoffice/*' element={<BackofficeRoutes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/activities/:id' element={<ActivitiesId />} />
        
      </Routes>
    </RoutesAnimationLayout>
  )
}

export default Routing
