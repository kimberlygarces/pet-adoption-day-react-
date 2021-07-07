import React from 'react'
import { Link } from 'react-router-dom';

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length == 0){
            return(
                <div>
                    <h3>No badge were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create New Badge
                    </Link>
                </div>
            )
        }
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