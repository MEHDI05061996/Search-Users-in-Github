import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const {name,email,telf}=this.props;
        return (
            <div>
                <h1> {name}  </h1>
                <ul>
                   
                    <li>  {email}  </li>
                    <li> {telf}   </li>
                </ul>
            </div>
        )
    }
}
//default 
Contact.defaultProps={
    name:"Myname is :",
    telf:"000000000",
    email:"my@email.com",
}
export default Contact;