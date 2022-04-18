import React, { Component } from 'react';

class DarkButton extends Component {
    render() {
        return(
            <button className="switchdarkmode" onClick={this.props.clicky}>
            <svg className="darkicon" width="38" height="38" viewBox="0 0 38 38">  
                <path d="M17.233,2.468a18.066,18.066,0,0,0-11.219,1A.755.755,0,0,0,5.845,4.81a15.239,15.239,0,0,1,7.276,12.8,15.239,15.239,0,0,1-7.276,12.8A.749.749,0,0,0,6,31.763a17.943,17.943,0,0,0,7.124,1.468c10.237,0,18.36-8.4,16.7-18.114C28.79,9,23.748,3.936,17.233,2.468Z" transform="translate(2.29 1.385)"/>
            </svg>
            </button>
        );
    }
}

export default DarkButton;