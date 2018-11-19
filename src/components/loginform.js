import React from 'react'
//import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <input id = "username" type = "text" placeholder = "User Name" />
                <br></br>
                <input id = "password" type = "password" placeholder = "Password"></input>
                <br></br>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        );
    }
}

export default LoginForm;