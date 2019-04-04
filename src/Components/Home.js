import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Welcome {localStorage.getItem('name')}</h1>
            </React.Fragment>
        );
    }
}

export default Home;