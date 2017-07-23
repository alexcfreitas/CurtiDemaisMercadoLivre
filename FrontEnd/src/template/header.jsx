import React, {Component} from 'react'
import Grid from '../template/grid'

export default class Header extends Component {

render() {
    return (           
<nav className="header-topo">
  <div className="container">
    <Grid cols='8 6 6'>
       <div className='logo text-left'><a href="#/destaque"><img src= 'img/LOGO.png' /></a></div>
    </Grid>
    <Grid cols='4 6 6'>
        <div className=" menu navbar-right">
            <a id="checkMenu" className="dropdown-toggle text-right text-menu" data-toggle="dropdown" href="#"><span className="hideTextoMenu">Menu</span>  <i className='icon-menu'></i></a>
            <ul className="dropdown-menu open-menu">
                <li className="open-menu"><a href="#/destaque">  <i className='icon-star'></i> Destaque</a></li>
                <li className="open-menu"><a href="#/curtiDemais"> <i className='icon-frame'></i> Shots Dribbble</a></li>
            </ul>
        </div>
    </Grid>
    </div>
</nav>

    )
  }
}