import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

function  Form() {
    return(
        <div className='container'>
             <div className='header'>
                Complete your purchase
             </div>
             <div className='menu'>
                <div className='tab'>
                    Personal Info
                    <div className='active'>

                    </div>
                </div>
                <div className='tab two'>
                    Billing Info
                </div>
                <div className='tab three'>
                    Confirm Payment
                </div>
             </div>
             <div className='body'>
                <form>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text' placeholder='Opara Linus Ahmed'/>
                    </div>
                    <div className='form-group'>
                        <label>Email address <span>*</span></label>
                        <input type='text' placeholder='OparaLinusAhmed@devmail.com'/>
                    </div>
                    <div className='form-group'>
                        <label>Address 1</label>
                        <input type='text' placeholder='The address of the user goes here'/>
                    </div>
                    <div className='form-group'>
                        <label>Address 2</label>
                        <input type='text' placeholder='and here '/>
                    </div>
                    <div className='form-group flex-one'>
                        <div className='one'>
                            <label>Local government</label>
                            <input type='text' placeholder='Surulere'/>
                        </div>
                       
                        <div className='two'>
                            <label>State</label>
                            <select>
                                <option value="lagos">Lagos</option>
                                <option value="ogun">Ogun</option>
                                <option selected value="abuja">Abuja</option>
                                <option value="ondo">Ondo</option>
                            </select>
                        </div> 
                    </div>
                </form>
                <div className='btn'>
                    <Link to='/billing' className='b1'>
                        Next
                    </Link>
                    <Link to='/' className='b2'>
                        cancel payment
                    </Link>
                </div>
             </div>
        </div>
    )
}
   
export default Form