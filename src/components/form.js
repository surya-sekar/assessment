import React, { useState } from 'react';

const Form = () => {

    var container = {
        backgroundColor: '#cad5e3',
        width: '100%',
        borderRadius: '5px',
        marginTop: '-20%',
        display: 'flex',
        borderStyle: 'dashed',
        borderColor: '#5b5bde'
    }

    var row = {
        marginTop: '5%',
        marginBottom: '5%',
    }

    var label = {
        float: 'left',
        marginLeft: '16%',
        color: 'black',
        fontSize: '20px'
    }

    var button = {
        backgroundColor: '#4a32a8',
        borderColor: '#4a32a8',
        marginTop: '12%',
        float: 'left',
        width: '30%',
        padding: '9px',
        marginLeft: '25%'
    }

    var textBox = {
        padding: '8px 32px 8px 2px',
        marginLeft: '15%'
    }

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
      });

      const handlefirstName = (event) => {
        setValues({
          ...values,
          firstName: event.target.value
        });
      }
      
      const handlelastName = (event) => {
        setValues({
          ...values,
          lastName: event.target.value
        });
      }
      const handleemail = (event) => {
        setValues({
          ...values,
          email: event.target.value
        });
      } 

      const handleSubmit = (event) => {
        event.preventDefault();   
        if(values.firstName.length > 45){
            alert('First Name exceeding 45 characters');
        }else if(values.lastName.length > 45){
            alert('Last Name exceeding 45 characters');
        }else if(values.email.length > 45){
          alert('Email exceeding 45 characters');
        }else{
          alert('Data has been submitted successfully');
        }
      }
 

    return(
        <form onSubmit={handleSubmit}>
        <div className="container" style={container}>
        <div className="row" style={row}>
           
            <div className="col-sm-3">
            <label style={label}>First Name</label>
              <input type='text' onChange={handlefirstName} style={textBox} className="form-control" name='firstName' required />
            </div>
            <div className="col-sm-3">
            <label style={label}>Last Name</label>
            <input type='text' onChange={handlelastName} style={textBox} className="form-control" name='lastName' required />
            </div>
            <div className="col-sm-3">
            <label style={label}>Email</label>
            <input type='email' onChange={handleemail} style={textBox}  className="form-control" name='email' required />
            </div>
            <div className="col-sm-3">
            <input type="submit" class="btn btn-primary" style={button} value='Save' name='Save' />
            </div>
           </div>
           </div>
           <div className="col-sm-12">
             <br/>
           <h3>FYI, d.	Email Address should be unique and shouldn’t be able to enter existing email addresses. - Is in progress, I'll submit that in next phase</h3>
            </div>
           </form>
    
           
          
    );
}

export default Form;