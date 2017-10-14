import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import {fetchDepartments, fetchWorkingMonths} from './actions/App'

import './App.css';
import Header from './components/Header'
import 'jquery/dist/jquery.min'
import $ from  'jquery'
import popper from 'popper.js/dist/umd/popper.min'
import {connect} from 'react-redux'

window.Popper = popper;
window.jQuery = $;
window.$ = $;

class App extends Component {
    componentWillMount = () => {
        this.props.fetchDepartments();
        this.props.fetchWorkingMonths();
    }

    render() {
        return (
            <div className="App">
                <Header>

                </Header>
                {
                    this.props.children
                }
            </div>
        );
    }
}
export default connect(null, {fetchDepartments, fetchWorkingMonths})(App);
