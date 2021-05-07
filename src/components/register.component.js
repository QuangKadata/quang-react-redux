import React,{useState} from 'react';

const RegisterForm = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <React.Fragment>
            <h2>New User ?</h2>
            <h4>Create an Account ?</h4>
            <br/>
            <form noValidate>
            <div className="form-group">
                    <label htmlFor="firstName">firstName Address :</label>
                    <input noValidate id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">lastName :</label>
                    <input noValidate id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email1">Email Address :</label>
                    <input noValidate id="email1"
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password :</label>
                    <input noValidate id="password1"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" />
                </div>
                <br/>
                     <button type="submit" className="btn btn-primary mr-2">
                    Register | <i className="fas fa-user-plus"/>
                </button>

               
               
            </form>
        </React.Fragment>
    );
}

export default RegisterForm;