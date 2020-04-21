import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  render(){
    return (
      <div class='about-wrapper'>
        <h1>About Vera</h1>
        <div class='about-panel'>
          <p>Insert description of Vera and our services here</p>
        </div>
      </div>
    )
  }
}


export default About;
