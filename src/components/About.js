import React from 'react';

export default function About() {
    return (
        <>
            <div>
                {/*About new york times*/}
                <section id="about">

                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 mt-5 ">
                                <div className="featured-img">
                                    <img src="./assets/images/banner2.png" width="100%" height="450px" alt="about us" />
                                </div>
                            </div>
                            <div className="col-md-6 mt-5 pt-5">
                                <div className="section-title  mt-5">
                                    <h2 className="text-uppercase">About NY Times</h2>
                                    <p className="mt-2">Company Details</p>

                                    <p className="">you can’t change the past. you can’t even change the future,
                                        in the sense that you can only change the present one moment at a time, stubbornly, until the future
                                        unwinds itself into the stories of our lives.</p>
                                    <p>We always stay with our clients and respect their business. We deliver 100% and provide instant response.</p>



                                    <button className="btn btn-dark btn-lg round mt-4">View full details</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>




        </>
    );
}
