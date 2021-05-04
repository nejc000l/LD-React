import React from 'react';
import '../styles/info.css';
import lzs from '../img/Lzs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';


const Info  = ()=>{

    return(
        <div className="float-container">

  <div className="float-child left container-left">
    <div className="title">
        <h1 className="title-text">Lovska Družina Pugled</h1>
        
    </div>
    <div className="info">
        <div className="logo-box">
            <img  src={lzs} alt=""></img>
        </div>   
          <div className="info-text"> 
          <a href="https://www.google.com/maps/place/Vidergarjeva+ulica+13,+1261+Ljubljana+-+Dobrunje/@46.0423558,14.5938189,17z/data=!3m1!4b1!4m5!3m4!1s0x476531e0221e0051:0x58c58467cab7cfce!8m2!3d46.0423558!4d14.5960076"> <h3>Vidgarjeva ulica 13, Ljubljana</h3>
            <span>1261 LJUBLJANA-DOBRUNJE</span>
            </a>
            </div>
            <div  className="email">       
            <FontAwesomeIcon className="email" icon={faEnvelopeOpen}></FontAwesomeIcon>    
            <span>Email:</span> <a href="mailto: ld.pugled@gmail.com"> ld.pugled@gmail.com </a>
            </div>

        <div className="nav-bar">
          <ul>
            <li>
              <a href="#" className="links">Informacije javnega značaja</a>
            </li>
            <li>
              <a href="#" className="links">APK-Afriška prašičja kuga</a>
            </li>
            <li>
              <a href="#" className="links">APK-Načrt ravnanja upravljalca lovišč</a>
            </li>
          </ul>
        </div>
    </div>
  </div>
  
  <div onClick className="float-child right container-right">
    <div className="blue">Float Column 2</div>
  </div>
  
</div>
    )
}
export default Info;
