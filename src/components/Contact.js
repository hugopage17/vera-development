import React, {Component} from 'react';
import { Link } from "react-router-dom";
import '../App.css'
import Swal from 'sweetalert2'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    if(window.screen.width <= 560){
      document.getElementById('navbar').style.display = 'none'
    }
  }

  showMessage = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Thank you for your message, we will reply within 2-3 days'
    })
  }

  render(){
    return (
      <div class='contact-wrapper'>
        <div class='contact-inner'>
          <h1>Contact Us</h1>
          <p style={{fontSize:12}}>Please send us all your queries and requests below and we will get back to you with 2-3 business days</p>
          <input type='email' placeholder='Email Address' class='email-add'/><br/>
          <textarea placeholder='How can we help' class='msg-body'/><br/>
          <button class='submit-but' onClick={this.showMessage}>Submit</button>
        </div>
      </div>
    )
  }
}


export default Contact;
