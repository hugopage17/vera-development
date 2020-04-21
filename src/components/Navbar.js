import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  toggleNav = () => {
    document.getElementById('navbar').style.display = 'none'
  }

  render(){
    return (
      <div id='navbar'>
        <ul>
          <button class='toggle-nav' onClick={this.toggleNav}>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
            <div class='tog-bar'></div>
          </button>
          <Link to='/' class='route-link'><li>Logo</li></Link>
          <Link to='/About' class='route-link'><li>About</li></Link>
          <Link to='/Contact' class='route-link'><li>Contact</li></Link>
          <Link to='/OurTeam' class='route-link'><li>Our Team</li></Link>
        </ul>
      </div>
    )
  }
}


export default Navbar;
