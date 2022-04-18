import React, { Component } from 'react';
import bannerpic from 'shared/pic/bannerpic.png'

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="home_1">
                    <div className="home_1_banner" style={{backgroundImage: `url(${bannerpic})`}}></div>
                    <div className="home_1_links">

                        <button type="button" className="home_1_link">
                        <svg className="home_1_link_icon" width="29.557" height="30.07" viewBox="0 0 29.557 30.07"><path d="M28.341,18.508a11.6,11.6,0,0,0,.106-1.473,11.6,11.6,0,0,0-.106-1.473l3.206-2.481a.753.753,0,0,0,.182-.962l-3.039-5.2a.767.767,0,0,0-.927-.331l-3.783,1.5a11.129,11.129,0,0,0-2.568-1.473l-.577-3.984A.738.738,0,0,0,20.091,2H14.014a.738.738,0,0,0-.744.631l-.577,3.984a11.7,11.7,0,0,0-2.568,1.473l-3.783-1.5a.745.745,0,0,0-.927.331l-3.039,5.2a.736.736,0,0,0,.182.962l3.206,2.481a11.8,11.8,0,0,0-.106,1.473,11.8,11.8,0,0,0,.106,1.473L2.558,20.989a.753.753,0,0,0-.182.962l3.039,5.2a.767.767,0,0,0,.927.331l3.783-1.5a11.129,11.129,0,0,0,2.568,1.473l.577,3.984a.738.738,0,0,0,.744.631h6.077a.738.738,0,0,0,.744-.631l.577-3.984a11.7,11.7,0,0,0,2.568-1.473l3.783,1.5a.745.745,0,0,0,.927-.331l3.039-5.2a.753.753,0,0,0-.182-.962ZM17.053,22.3a5.263,5.263,0,1,1,5.318-5.262A5.3,5.3,0,0,1,17.053,22.3Z" transform="translate(-3.271 -2)" fill="var(--text)" opacity="0.5"/></svg>
                            설정
                        </button>
                        <button type="button" className="home_1_link">
                        <svg className="home_1_link_icon" width="26.98" height="26.98" viewBox="0 0 26.98 26.98"><path d="M26.982,3H6A3.007,3.007,0,0,0,3,6V16.49a3.007,3.007,0,0,0,3,3H26.982a3.007,3.007,0,0,0,3-3V6A3.007,3.007,0,0,0,26.982,3Zm0,8.993h-6a4.5,4.5,0,0,1-8.993,0H6V6H26.982Zm-6,10.492H29.98v4.5a3.007,3.007,0,0,1-3,3H6a3.007,3.007,0,0,1-3-3v-4.5h8.993a4.5,4.5,0,1,0,8.993,0Z" transform="translate(-3 -3)" fill="var(--text)" opacity="0.5"/></svg>
                            보관함
                        </button>
                        <button type="button" className="home_1_link">
                            <svg className="home_1_link_icon" width="25.07" height="28.19" viewBox="0 0 30.07 28.19"><path d="M29 32h-26c-0.552 0-1-0.447-1-1v-16c0-0.553 0.448-1 1-1h3v-4c0-5.523 4.477-10 10-10s10 4.477 10 10v4h3c0.553 0 1 0.447 1 1v16c0 0.553-0.447 1-1 1zM22 9.5c0-3.038-2.687-5.5-6-5.5s-6 2.462-6 5.5v4.5h12v-4.5z" transform="translate(-2 -3)" fill="#b990de"/></svg>
                            로그인
                        </button>
                        <button type="button" className="home_1_link">
                            <svg className="home_1_link_icon" width="30.07" height="28.19" viewBox="0 0 30.07 28.19"><path d="M15.531,9.265l-2.1,2.193,3.909,4.072H2v3.132H17.336l-3.909,4.072,2.1,2.193L23.049,17.1ZM29.063,28.058H17.035V31.19H29.063a3.081,3.081,0,0,0,3.007-3.132V6.132A3.081,3.081,0,0,0,29.063,3H17.035V6.132H29.063Z" transform="translate(-2 -3)" fill="#b990de"/></svg>
                            게시판
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;