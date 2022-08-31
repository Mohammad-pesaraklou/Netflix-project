 const validate = (data) => {
    
    const errors = {};


    if(!data.email) {
        errors.email = "Email is Required"
    } else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Please enter the Valid Email"
    }else {
        delete errors.email
    }

    if(!data.password){
     errors.password = "Password is required"
    }else if(data.password.length < 6){
        errors.password = "Your password needs to be 6 charecter ot more!"
    }else{
        delete errors.password
    }

  


    return errors;
};

export {validate}