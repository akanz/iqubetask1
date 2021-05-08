import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Billing() {
    return(
        <div className='container'>
             <div className='header'>
                Complete your purchase
             </div>
             <div className='menu'>
                <div className='tab'>
                    Personal Info
                </div>
                <div className='tab two'>
                    Billing Info
                    <div className='active'>
                        
                    </div>
                </div>
                <div className='tab three'>
                    Confirm Payment
                </div>
             </div>
             <div className='body'>
                <form>
                    <div className='form-group'>
                        <label>Name on Card <span>*</span></label>
                        <input type='text' placeholder='Opara Linus Ahmed'/>
                    </div>
                    <div className='form-group'>
                        <label>Card Type <span>*</span></label>
                        <select>
                            <option value='visa'>visa</option>
                            <option value='mastercard'>mastercard</option>
                            <option value='verve'>verve</option>
                        </select>
                    </div>
                    <div className='form-group flex-two'>
                        <div className='three'>
                            <label>Card details</label>
                            <input type='text' placeholder='44960 44960 44960 44960'/>
                        </div>

                        <div className='four'>
                            <label>Expiration date <span>*</span></label>
                            <input type='text' placeholder='04 / 23 '/>
                        </div> 

                        <div className='five'>
                            <label>CVV <span>*</span></label>
                            <input type='text' placeholder='923 '/>
                        </div> 
                    </div>
                </form>
                <div className='btn'>
                        <Link to='/payment' className='b1'>
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

export default Billing