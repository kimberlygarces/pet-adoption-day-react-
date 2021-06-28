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
                 <div class="form-group">
                        <label htmlFor="" for="exampleFormControlInput1">First Name</label>
                        <input 
                        onChange={this.props.onChange}
                         name="firstName" 
                         class="form-control" 
                         type="text" 
                         value={this.props.formValues.firstName}
                      />
                </div>
                <div class="form-group">
                        <label htmlFor="" for="exampleFormControlInput1">Last Name</label>
                        <input onChange={this.props.onChange} 
                        class="form-control"
                         name="lastName"
                         type="text" 
                         value={this.props.formValues.lastName}
                        aria-label=".form-control-lg example"/>
                </div>
                <div class="form-group">
                        <label htmlFor="" for="exampleFormControlInput1">Email address</label>
                        <input 
                        onChange={this.props.onChange} 
                        class="form-control" 
                        name="Email_address"
                        type="email"
                        value={this.props.formValues.Email_address}
                        />
                </div>
                <div class="form-group">
                        <label htmlFor="" for="exampleFormControlInput1">Job Title</label>
                        <input onChange={this.props.onChange} 
                        class="form-control" 
                        type="text" 
                        name="jobTitle" 
                        value={this.props.formValues.jobTitle}
                        />
                </div>
                <div class="form-group">
                        <label htmlFor="" for="exampleFormControlInput1">twitter</label>
                        <input onChange={this.props.onChange}
                         class="form-control"
                          type="text"
                          name="twitter" 
                          value={this.props.formValues.twitter}
                          />
                </div>
                <button onClick={this.handleClick} class="btn btn-primary">Primary</button>

                 </form>
            </div>
        )
    }}

export default BadgeForm;