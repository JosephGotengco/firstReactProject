import React, { Component } from 'react';

class AccountIcon extends Component {
    state = { 
        imgSrc: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1533970164/180809-Stern-Danny-Devito-hero_fmoisz",
        imgAlt: "Go fuck urself"
     }
    render() { 
        return ( 
            <div className="d-flex justify-content-center align-items-center account-icon-wrapper">
                <img src={this.state.imgSrc} alt={this.state.imgAlt}></img>
            </div>
         );
    }
}
 
export default AccountIcon;