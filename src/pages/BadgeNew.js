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
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'TWITER'}
                                jobTitle={this.state.form.jobTitle || 'jobTitle'}
                                Email_address={this.state.form.Email_address || 'Email'}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"

                            />
                        </div>
                        <div className="col-sm-6"> 
                        <BadgeForm  
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          formValues={this.state.form}
                        />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }}

export default BadgeNew;