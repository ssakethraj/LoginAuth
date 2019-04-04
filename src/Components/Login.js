import React from 'react';

class Login extends React.Component {
    
    render() {
        console.log("&&&&&&&", this.props.handleSubmit)
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input 
                    type="text"
                    // placeholder="Enter Todo"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                />
                <input type="submit" value="Login"/>
            </form>
        )
    }
}

export default Login;