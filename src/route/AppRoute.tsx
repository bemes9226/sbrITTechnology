import React from 'react'
import { Notification } from '../components/notification'
import { Toast } from '../Toast/Toast'
import { Route } from 'react-router-dom'
import Home  from '../pages/Home/Home'

type Props = {}

const AppRoute = (props: Props) => {
  return (
    <React.Fragment>
         <Route path="/" element={<Home />} />
      <Route path="/" element={<Notification />} />
    </React.Fragment>
  )
}