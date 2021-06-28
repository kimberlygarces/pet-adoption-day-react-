import React from 'react';
import '../styles/BadgeNew.css'
import avatar from '../images/mascotas.jpg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


class BadgeNew extends React.Component{
    state = {
        form:{
            firstName:'',
            lastName: '',
            Email_address: '',
            jobTitle: '',
            twitter: '',
        }
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-img" src={avatar} alt="Logo" />
                </div>
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-sm-6"> 
                        
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                Email_address={this.state.form.Email_address}
                            />
                        </div>
                        <div className="col-sm-6"> 
                        <BadgeForm  
                        onChange={this.handleChange} 
                        formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }}

export default BadgeNew;