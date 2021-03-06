import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Team extends Component{

    render(){

        return(
            <div>
                <section className="page-section bg-light" id="team">
                        <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="team-member">
                                            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                                            <h4>Kay Garland</h4>
                                            <p className="text-muted">Lead Designer</p>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="team-member">
                                            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="" />
                                            <h4>Larry Parker</h4>
                                            <p className="text-muted">Lead Marketer</p>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="team-member">
                                            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="" />
                                            <h4>Diana Petersen</h4>
                                            <p className="text-muted">Lead Developer</p>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                            <Link className="btn btn-dark btn-social mx-2" to="#!">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="row">
                                    <div className="col-lg-8 mx-auto text-center">
                                        <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                                    </div>
                                </div>
                        </div>          
                </section>
        </div>
        )
    }
}
export default Team;