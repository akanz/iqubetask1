import React from 'react';
import {BrowserRouter as Router,
        Link} from 'react-router-dom'

function Payment() {
    return(
        <div className='container'>
             <div className='header'>
                Complete your purchase
             </div>
             <div className='menu'>
                    <div to='/' className='tab'>
                    Personal Info
                </div>
                <div to='/billing' className='tab two'>
                    Billing Info
                    <div className='active'>

                    </div>
                </div>
                <div to='/confirm' className='tab three'>
                    Confirm Payment
                </div>
             </div>
             <div className='body'>
                <div className='confainer2'>
                    <div className='header'>
                        <div className='left'>
                            Item Name
                        </div>
                        <div className='right'>
                            N price
                        </div>
                    </div>
                    <div className='main'>
                        <div className='flex-group'>
                            <div className='left'>
                                Data science and usability
                            </div>
                            <div className='right'>
                                50,000.00
                            </div>
                        </div>
                        <div className='flex-group'>
                            <div className='left'>
                                Shipping
                            </div>
                            <div className='right'>
                                <span>
                                    0.00
                                </span>
                               
                            </div>
                        </div>

                        <div className='footer'>
                            <div className=' flex-group'>
                                <div className='left'>
                                    Total
                                </div>
                                <div className='right desc' placeholder='Total'>
                                    50,000.00
                                </div>
                            </div>
                    </div>
                    </div>  
                    
                </div>

                <div className='btn'>
                        <Link to='/confirm' className='b1'>
                            Pay
                        </Link>
                        <Link to='/' className='b2'>
                            cancel payment
                        </Link>
                    </div>
             </div>
        </div>
    )
}
   
export default Payment