import React from 'react';
import {Link}from 'react-router-dom';



function StartButton  (){
        return(
            <div className="button">
                <Link to="/converter"><p> START </p></Link>
            </div>            
        )}

export default StartButton;