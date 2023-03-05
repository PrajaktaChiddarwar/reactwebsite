import React, {useState} from 'react';

const Contact = () => {
    const [userData, setuserData] = useState(
        {
            firstName:"",
            lastName:"",
            phoneNo:"",
            email:"",
            address:"",
            message:""

        }
    );
    let name , value;
    const postUserData = (e) =>
    {
        name= e.target.name;
        value=e.target.value;
        setuserData({...userData, [name]:value});
    };

    // connect with firebase

    const submitData = async(e)=>
    {
        e.preventDefault();
        const {
            firstName,
            lastName,
            phoneNo,
            email,
            address,
            message
        } =userData;
        if( firstName && lastName &&  phoneNo && email && address && message)
            {
        const res= fetch('https://reactwithfirebase-2a22f-default-rtdb.firebaseio.com/userRecords.json',
       { method:"POST",
        Headers:
        {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            firstName,
            lastName,
            phoneNo,
            email,
            address,
            message
        })
    }
        );
        if(res)
        {
            setuserData({  firstName,
                lastName,
                phoneNo,
                email,
                address,
                message})
            alert("Data Stored");
        }
        else
        {
            alert("Please Fill Data");
        }
    }
    else
    {
        alert("Please Fill Data");
    }
    };
    
  return (
    <>
        <section className='contactus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='contactus-leftside col-12 col-lg-5'>
                        <h1 className='main-heading'>Connect With Our <br/> Sales Team 👩‍🏫</h1>
                        <p className='para mb-4'>Connet with sales person to get answer to all your queries.</p>
                       <figure>
                        <img src='./Images/images/hero1.jpg'   alt='contactusImg' className='img-fluid mb-2'></img>
                        </figure>
                        </div>
                        {/* right contact side */}
                        <div className='contactus-rightside col-12 col-lg-7 mt-4'>
                            <form method='post'>
                                
                                    <div className='row  inputwidth'>
                                        <div className='col-12 col-lg-6   '>
                                            <input type="text" name='firstName' id='' className='form-control' 
                                            value={userData.firstName} onChange={postUserData}
                                            placeholder='First Name'></input>
                                        </div>
                                        <div className='col-12 col-lg-6 '>
                                            <input type="text" name='lastName' id='' className='form-control' 
                                            value={userData.lastName} onChange={postUserData}
                                            placeholder='Last Name'></input>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-12 col-lg-6 contact-inputfield'>
                                            <input type="number" name='phoneNo' id='' className='form-control' 
                                            value={userData.phoneNo} onChange={postUserData}
                                            placeholder='Phone No'></input>
                                        </div>
                                        <div className='col-12 col-lg-6 contact-inputfield'>
                                            <input type="email" name='email' id='' className='form-control' 
                                            value={userData.email} onChange={postUserData}
                                            placeholder='Email Id'></input>
                                        </div>
                                    </div>
                                <div className='row'>
                                    <div className='col-12'>
                                    <input type="text" name='address' id='' className='form-control ' 
                                    value={userData.address} onChange={postUserData}
                                    placeholder='Address'></input>
                                    </div>
                                 </div>
                                    <div className='row'>
                                    <div className='col-12'>
                                    <input type="text" name='message' id='paraInput' className='form-control  para' 
                                    value={userData.message} onChange={postUserData}
                                    placeholder='Enter Your Query.....'></input>
                                    </div>
                               </div>
                               <div className='form-check form-checkbox-style'>
                                <input className='from-check-input' type="checkbox" value="" id='flexCheckChecked'  />
                                <label className='form-check-label ' for= "flevCheckChecked">
                                  I agree to share my contact details to team.
                                </label>
                               </div>
                               <button type='submit' className=' btn btn-style w-100' onSubmit={submitData}> Submit </button>
                            </form>
                        </div>

                    
                     
                    </div>
                </div>
            </div>
        </div>

        </section>
    </>
);
  }

export default Contact