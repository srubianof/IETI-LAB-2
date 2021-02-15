import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, useHistory} from 'react-router-dom'
import {Login} from "./components/Login/Login";
import TodoApp from "./components/TodoApp/TodoApp";
import logo from './logo.svg';

export const App = () => {
    let history = useHistory();
    const LoginView = () => (
        <Login setLoggedState={setIsLoggedIn} LoggedState={isLoggedIn}/>
    );

    const TodoAppView = () => (
        <TodoApp isLoggedIn={isLoggedIn} history={history}/>
    );
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (<Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">TODO React App</h1>
            </header>

            <br/>
            <br/>
            {
                !isLoggedIn
                    ? <ul>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    : <ul>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

            }


            <div>
                <Route exact path="/" component={LoginView}/>
                <Route path="/todo" component={TodoAppView}/>
            </div>
        </div>
    </Router>);
}
