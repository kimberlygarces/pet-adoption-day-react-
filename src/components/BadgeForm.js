import React from 'react';

class BadgeForm extends React.Component{
    state = {
        Job_Title: 'Designer'
    }

    handleClick = e => {
        console.log("Algo sucedio")
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log("Summit")
        console.log(this.state)

    }
    render(){
        return(
            <div className="container-fluid">
                 <h1>New Attendant</h1>
                 <form onSubmit={this.handleSubmit}>
                 <div className="form-group">
                        <label htmlFor=" exampleFormControlInput1">First Name</label>
                        <input 
                        onChange={this.props.onChange}
                         name="firstName" 
                         className="form-control" 
                         type="text" 
                         value={this.props.formValues.firstName}
                      />
                </div>
                <div className="form-group">
                        <label htmlFor=" exampleFormControlInput1">Last Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control"
                         name="lastName"
                         type="text" 
                         value={this.props.formValues.lastName}
                        aria-label=".form-control-lg example"/>
                </div>
                <div className="form-group">
                        <label htmlFor=" exampleFormControlInput1">Email address</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        name="Email_address"
                        type="email"
                        value={this.props.formValues.Email_address}
                        />
                </div>
                <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Job Title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle" 
                        value={this.props.formValues.jobTitle}
                        />
                </div>
                <div className="form-group">
                        <label htmlFor=" exampleFormControlInput1">twitter</label>
                        <input onChange={this.props.onChange}
                         className="form-control"
                          type="text"
                          name="twitter" 
                          value={this.props.formValues.twitter}
                          />
                </div>
                <button onClick={this.handleClick} className="btn btn-primary">Primary</button>

                 </form>
            </div>
        )
    }}

export default BadgeForm;