import React from 'react'

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((badge) => {
                 return(
                    <li className="list__style"key={badge.id}>
                        <div className="list__style-img" >
                        <img className="img-circle" src={badge.avatarUrl}></img>
                        </div>
                        <div className="list__style-content">
                        <h6>{badge.firstName} {badge.lastName}</h6>
                        <h6>{badge.email}</h6>
                        <h6>{badge.jobTitle}</h6>
                        <h6>{badge.twitter}</h6>
                        </div>
                    </li>
                )
            })}
        </ul>
        );
    }
}

export default BadgesList