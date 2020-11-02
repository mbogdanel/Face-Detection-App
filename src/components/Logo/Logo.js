import React from 'react';
import Tilt from 'react-tilt';
import brain from './Untitled-1.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    {/* <img style={{paddingTop: '5px'}} alt='logo' src={brain}/> */}
                    <img style={{paddingTop: '1px'}} alt='logo' src={brain}  width='95px' height='120px'/>
                </div>
            </Tilt>
        </div>    
    );
}

export default Logo;