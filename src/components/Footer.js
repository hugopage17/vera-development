import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div class='footer-wrapper'>
        <div class='footer-inner'>
          <div style={{overflow:'auto'}}>
            <div style={{float:'left'}}>
              <ul>
                <li>Linkedin</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <br/>
                <li>Email</li>
                <li>Phone Number</li>
              </ul>
            </div>
            <div style={{float:'right'}}>
              <ul>
                <Link to='/' class='route-link'><li>Logo</li></Link>
                <Link to='/About' class='route-link'><li>About</li></Link>
                <Link to='/Contact' class='route-link'><li>Contact</li></Link>
                <Link to='/OurTeam' class='route-link'><li>Our Team</li></Link>
              </ul>
            </div>
          </div>
          <div style={{textAlign:'center'}}>
            <p>Vera Development &#169;</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Footer;
