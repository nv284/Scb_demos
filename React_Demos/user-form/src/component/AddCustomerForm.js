import React ,{useState} from "react";

const AddCustomerForm =()=>{
const[formData , setFormdata]=useState({
    firstName: '',
    lastName:'',
    email :''
});

//errors
const[formErrors , setFormErrors] = useState({});
//for tracking touched fileds
const[formTouched , setFormTouched] = useState({});

//handling input changes
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value, //firstName : '' , lastname : '' , email: 'abc@exmaple.com'
    });
    
  };
  //handling input blur( foucs out)
const handleBlur = (e) => {
    const { name } = e.target;
    setFormTouched({
      ...formTouched,
      [name]: true,
    });
    validateField(name, formData[name]);
  };
const validateField=(name , value)=>{
    let errors={...formErrors};
    switch(name){
        case 'firstName':
            errors.firstName= value.trim() ?'':'first name is required';
            break;
        case 'lastName':
            errors.lastName= value.trim() ?'':'last name is required';
            break;
        case 'email':
            errors.email = /^\S+@\S+\.\S+$/.test(value)
            ?''
            : 'A valid email is required';
            break;
            default:
            break;

    }
    setFormErrors(errors);
}
const validateForm=()=>{
const fields = ['firstName' , 'lastName' , 'email'];
let valid = true;
fields.forEach((field) => {
    validateField(field, formData[field]);
    if(field=== 'email' && !/^\S+@\S+\.\S+$/.test(formData[field])
    ){
valid=false;
}else if(!formData[field].trim()){
    valid=false;
}
});
return valid ;


};
const handleSubmit=(e)=>{
 e.preventDefault();
 setFormTouched({
    firstName:true,
    lastName:true,
    email:true
 });

 if(validateForm()){
    alert('form submitted sucessfully!');
    console.log('Sumbimmetd data' , formData);
    //reset form 
    setFormdata({firstName:'' , lastName:'' , email:''});
    setFormErrors({});
    setFormTouched({});
 }
};

const getInputClass = (field)=>{
    if(!formTouched [field]) return 'form-control';
    return formErrors[field] ? 'form-control is-invalid' : 'form-control is-invalid';
}

return(
    <div className="container mt-5">
        <h3>Add Customer</h3>
        <hr/>
        <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3"> {/*first name*/}

<label className="form-label">First Name</label>
<input type="text" className={getInputClass('firstName')} value={formData.firstName} 
onChange={handleChange} onBlur={handleBlur} />
{formErrors.firstName &&(<div className="invalid-feedback">{formErrors.firstName}</div>)}
            </div>

             <div className="mb-3"> {/*last name*/}
<label className="form-label">Last Name</label>
<input type="text" className={getInputClass('lastName')} value={formData.lastName} 
onChange={handleChange} onBlur={handleBlur} />
{formErrors.lastName &&(<div className="invalid-feedback">{formErrors.lastName}</div>)}
            </div>

             <div className="mb-3"> {/* email name*/}
<label className="form-label">Email</label>
<input type="email" className={getInputClass('email')} value={formData.email} 
onChange={handleChange} onBlur={handleBlur} />
{formErrors.email &&(<div className="invalid-feedback">{formErrors.email}</div>)}
            </div>
            <button type="submit" className="btn btn-primary">
                submit
            </button>
        </form>
    </div>
);
};



export default AddCustomerForm;