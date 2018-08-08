import React from 'react';

const Login = ({redirectToLogin}) => (
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col col-xl-4 col-lg-5 col-md-6 text-center">
                <img className="mb-6" src="assets/img/logo.white.png" alt=""/>
                <button className="btn btn-lg btn-block btn-primary" onClick={() => redirectToLogin()}>
                    Login With GitHub
                </button>
            </div>
        </div>
    </div>
);

export default Login;