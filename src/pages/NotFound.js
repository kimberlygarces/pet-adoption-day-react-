import React from 'react';
import '../styles/Badge__NotFount.css'
import NotFoundIMG from '../images/error.png'


function NotFound(){
    return (
    <div className="Badge__NotFount">
        <h4>Error 404</h4>
        <img className="Badge__NotFount-img" src={NotFoundIMG} alt="Conf"></img>
    </div>
    
    )
}

export default NotFound