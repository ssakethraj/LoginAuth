import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';

const images = ["abc", "cde", "efg", "ghy"]

const Button = withRouter(({ history, handleLogout}) => (
    <button
      type='button'
      onClick={() => { 
          handleLogout(history)
        }}
    >
      Logout
    </button>
  ))

class Header extends React.Component {
    handleLogout = () => {
        localStorage.setItem('isLoggedin', false);
       return <Redirect 
            to='/login'
        />
    }
    render() {
        return(
            <React.Fragment>
                <ul id="header"> 
                    {
                        this.props.isloggedIn
                        ? <li><Button handleLogout={this.props.handleLogout}/></li>
                        : <li><Link to='/login'>Login</Link></li>
                    }
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Header;