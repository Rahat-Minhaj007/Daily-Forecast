import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Home/NavBar/NavBar';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className=" signIn">
            <NavBar />
            <div className="container">
                <div className="row ">
                    <div className="col-md-12 d-flex justify-content-center signIn-container" >
                        <div class="card sign-card m-2 text-center cb1">

                            <div class="card-body">
                                <span className="card-num fw-bold">04</span>

                                <h2 class="card-title mb-4 text-light">SIGN IN</h2>

                                <div className="row sign-input">
                                    <div className="col-md-12 pb-3">
                                        <input required  type="email" name="email" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <input required type="password" name="password" placeholder="Enter Your Password" />
                                    </div>
                                </div>

                                <Link to="/home" type="submit" class="btn btn-outline-light mt-3">Sign In</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignIn;