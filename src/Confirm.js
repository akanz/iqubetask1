import React from 'react';
import {BrowserRouter as Router,
        Link} from 'react-router-dom'
import Img from './img/tick.svg'

function Confirm() {
    return(
        <div className='confainer'>
            <div className='body'>
                <div className='img'>
                    <img src={Img} />
                </div>
                <div className='title'>
                    Purchase Completed
                </div>
                <div className='det'>
                    Please check your email for details concerning this transaction
                </div>
                <Link to='/' className='link'>
                    Return home
                </Link>
            </div>
        </div>
    )
}
   
export default Confirm