import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Explore, Memu } from 'pages';
import { Navigation, DarkButton } from 'components';
import './App.css';
import { Notice } from '../pages';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkmode: ""
        }
    }
    activedarkmode = () => {
        if (this.state.darkmode === "") {
            this.setState({
                darkmode: "darkmode"
            })
        } else {
            this.setState({
                darkmode: ""
            })
        }
    }
    render() {
        return (
            <div className={this.state.darkmode}>
                <Navigation />
                <DarkButton clicky={() => this.activedarkmode()}/>
                <div className="oin_body">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/explore" component={Explore}/>
                    <Route exact path="/Memu" component={Memu}/>
                    <Route exact path="/notice" component={Notice}/>
                </div>
                <footer>
                    하단부
                </footer>
                <div className="entire-background" />
            </div>
        );
    }
}

export default App;