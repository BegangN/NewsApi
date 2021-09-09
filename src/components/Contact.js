import React from 'react';

export default function Contact() {
    return (
        <>
            <article id="contact">
                <div className="jumbotron jumbotron-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">

                                <div className="section-title mt-5">
                                    <h2 className="mt-5">Contact us</h2>
                                    <p className="mt-2">Feel free to contact us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="well well-sm">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="name">
                                                    Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                                            </div>
                                            <div className="form-group">
                                                <label for="email">
                                                    Email Address</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                                    </span>
                                                    <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                            </div>
                                            <div className="form-group">
                                                <label for="subject">
                                                    Subject</label>
                                                <select id="subject" name="subject" className="form-control" required="required">
                                                    <option value="na" selected="">Choose One:</option>
                                                    <option value="service">General Customer Service</option>
                                                    <option value="suggestions">Suggestions</option>
                                                    <option value="product">Complaints</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="name">
                                                    Message</label>
                                                <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-dark pull-right" id="btnContactUs">
                                                Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </article>

        </>
    );
}
