
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/bootstrap/dist/js/bootstrap.min'
import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/simple-line-icons/css/simple-line-icons.css'
import '../template/assets/css/style.css'


import React from 'react'
import Routes from './routes'
import Header from '../template/header'


export default props => (
  <div>
      <Header />
    <div className="container">
      <Routes />
    </div>
  </div>
)
