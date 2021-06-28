import React from 'react';
import confLogo from '../images/badge-header.png'
import avatar from '../images/mascotas.jpg'

import '../styles/badge.css'


class Badge extends React.Component{
    render(){
       
        return(
            <div className= "badge">
                <div className= "badge_header">
                     <img src={confLogo} className="confLogo"  alt="Logo"></img>
                     <h4 className="font-weight-light">My Pets</h4>
                </div>

                <div className= "badge_section-name">
                <img className="badge_avatar" src={avatar}></img>

                <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>

                </div>

                <div className= "badge_section-info">
                    <p>{this.props.jobTitle}</p>
                    <p>{this.props.twitter}</p>
                    <p>{this.props.Email_address}</p>

                </div>

                <div className= "badge_footer">
                    #adopt
                </div>
            </div>
            
        )
    }
}

export default Badge;