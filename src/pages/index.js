import React from 'react';
import '../styles/index.css'
import pet_bro from '../images/pet-bro.svg'


function index(){
    return (
    <div className="Badge__index">
        <h6>Centro de Adopción Animal</h6>
        <img className="Badge__index-img" src={pet_bro} alt="Conf"></img>
    </div>
    
    )
}

export default index