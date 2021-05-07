import React, { useState } from 'react';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <React.Fragment>
            <h2>Have an Account ?</h2>
            <h4>Login Here</h4>
            <br />

            <form noValidate>
                <div className="form-group">
                    <label htmlFor="email">Email Address :</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" />
                </div>
                <br/>
                     <button type="submit" className="btn btn-primary mr-2">
                    Login | <i className="fas fa-sign-in-alt"/>
                </button>

                <button type="submit" className="btn btn-outline-secondary">
                    Cancel | <i className="fas fa-sign-in-alt"/>
                </button>
               
            </form>
        </React.Fragment>
    );
}

export default LoginForm;