import React from 'react';
import './App.css';
import Header from '../Components/Header';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Login from '../Components/Login';

function Protected({component: Component, ...rest}) {
    console.log("$$$$$$$$$", localStorage.getItem('isLoggedin'));
    return (
        <Route 
            {...rest}
            render={props => 
                localStorage.getItem('isLoggedin') == 'true'
                ? <Component {...props}/>
                : <Redirect to='/login'/>
            }
        />
    )
}


class App extends React.Component {
    state = {
        name: '',
        isLoggedIn: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Loggedin')
        localStorage.setItem('isLoggedin', true);
        localStorage.setItem('name', this.state.name);
        this.setState({
            isLoggedIn: true
        })
        console.log("Logged in..!")
    }

    handleLogout = (history) => {
        history.push('/login');
        localStorage.setItem('isLoggedin', false);
        this.setState({
            isLoggedIn: false
        })
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return(
            <div className="App">
                <div>
                    <Router>
                        <Header isloggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
                        <div>
                            <Protected exact path="/" component={Home}/>
                            <Route 
                                path="/login" 
                                render={props => <Login {...props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />}
                                // component={Login}
                            />
                            <Protected path="/about" component={About} />
                            <Protected path="/contact" component={Contact} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;

