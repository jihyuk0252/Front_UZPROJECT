import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'shared/Navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: true
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY;
            if (isTop === false) {
                this.setState({ scrolled: false })
            } else {
                this.setState({ scrolled: true })
            }
        })
        var lastScrollTop = 0;
  
        window.addEventListener("scroll", () => {
          const st = window.scrollY;
      
          if (st > lastScrollTop) {
            this.setState({ scrolling: true })
          } else {
            this.setState({ scrolling: false })
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }, false)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }
    render() {
        return (
            <header>
                <div className={this.state.scrolled ? `${this.state.scrolling ? 'nav_bg_s_hidden' : 'nav_bg_s'}` :  `${this.state.scrolling ? 'nav_bg' : 'nav_bg'}`}>
                    <div className="nav_wrapper">
                        <div className="nav_left">
                        <NavLink exact to="/" className="logo" activeClassName="logo_a">로고</NavLink>
                        </div>
                        <div className="nav_right">
                            <ul>
                                <li><NavLink exact to="/explore" className="nav_right_i" activeClassName="nav_right_a"><svg width="30" height="30" viewBox="0 0 30 30"><rect width="30" height="18" rx="4" transform="translate(0 12)"/><rect width="20" height="10" rx="4" transform="translate(10)"/></svg></NavLink></li>
                                <li><NavLink className="nav_right_i" activeClassName="nav_right_a" exact to="/notice"><svg width="24" height="30" viewBox="0 0 24 30"><path d="M16.415,32.5a3.131,3.131,0,0,0,3.164-3.077H13.251A3.12,3.12,0,0,0,16.415,32.5Zm9.492-9.231V15.577c0-4.723-2.595-8.677-7.119-9.723V4.808a2.374,2.374,0,0,0-4.746,0V5.854C9.5,6.9,6.923,10.838,6.923,15.577v7.692L4.883,25.254A1.534,1.534,0,0,0,5.99,27.885H26.825a1.538,1.538,0,0,0,1.123-2.631Z" transform="translate(-4.414 -2.5)"/></svg></NavLink></li>
                                
                                <li><NavLink className="nav_right_i" activeClassName="nav_right_a" exact to="/memu"><svg width="30" height="30" viewBox="0 0 30 21"><rect width="30" height="3" transform="translate(0 9)"/><rect width="30" height="3"/><rect width="30" height="3" transform="translate(0 18)"/></svg></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={this.state.scrolling ? 'nav_mobile_hidden' : 'nav_mobile'}>
                    <button type="button" className="nav_mobile_button_w"><NavLink className="nav_mobile_button" activeClassName="nav_mobile_button_a" exact to="/"><svg width="46.401" height="42" viewBox="0 0 46.401 42"><path d="M20.953,42.823V30.214H31.041V42.823a2.529,2.529,0,0,0,2.522,2.522h7.565a2.529,2.529,0,0,0,2.522-2.522V25.171h4.287a1.251,1.251,0,0,0,.832-2.194L27.687,3.988a2.541,2.541,0,0,0-3.379,0L3.225,22.977a1.256,1.256,0,0,0,.832,2.194H8.345V42.823a2.529,2.529,0,0,0,2.522,2.522h7.565A2.529,2.529,0,0,0,20.953,42.823Z" transform="translate(-2.802 -3.345)"/></svg></NavLink></button>
                    <button type="button" className="nav_mobile_button_w"><NavLink className="nav_mobile_button" activeClassName="nav_mobile_button_a" exact to="/explore"><svg width="42" height="42" viewBox="0 0 42 42"><path d="M3961.013,4798a7,7,0,0,1-7-7v-10.5a7,7,0,0,1,7-7h28a7,7,0,0,1,7,7V4791a7,7,0,0,1-7,7Zm10.5-28a5.251,5.251,0,0,1-5.251-5.25v-3.5a5.25,5.25,0,0,1,5.251-5.25h19.25a5.25,5.25,0,0,1,5.25,5.25v3.5a5.25,5.25,0,0,1-5.25,5.25Z" transform="translate(-3954.013 -4756)"/></svg></NavLink></button>
                    <button type="button" className="nav_mobile_button nav_mobile_button_w"><NavLink className="nav_mobile_button" activeClassName="nav_mobile_button_a" exact to="/notice"><svg width="32.675" height="42" viewBox="0 0 32.675 42"><path d="M20.754,44.5a4.32,4.32,0,0,0,4.308-4.308H16.446A4.306,4.306,0,0,0,20.754,44.5ZM33.677,31.577V20.808c0-6.612-3.532-12.148-9.692-13.612V5.731a3.231,3.231,0,1,0-6.462,0V7.2C11.341,8.66,7.831,14.174,7.831,20.808V31.577L5.052,34.355A2.154,2.154,0,0,0,6.56,38.038H34.926a2.16,2.16,0,0,0,1.529-3.683Z" transform="translate(-4.414 -2.5)"/></svg></NavLink></button>
                    <button type="button" className="nav_mobile_button nav_mobile_button_w"><NavLink className="nav_mobile_button" activeClassName="nav_mobile_button_a" exact to="/memu"><svg width="41" height="33.545" viewBox="0 0 41 33.545"><path d="M3,39.545H44V33.955H3ZM3,25.568H44V19.977H3ZM3,6v5.591H44V6Z" transform="translate(-3 -6)"/></svg></NavLink></button>
                </div>
            </header>
        );
    }
};

export default Navigation;