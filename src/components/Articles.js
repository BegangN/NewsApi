
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Articles() {

  
    const [info, setInfo] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      axios("http://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=jRmClkjI3UujicNo9Tl7IXAFrPuKQOZF")
        .then((response) => {
          setInfo(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
    if (loading) return "";
    if (error) return "";
    return (
      <>
        <div id="news" className="container section-title mt-5">
          <h2 className="mt-5">News</h2>
          <p className="mt-2">Financial planners and portfolio managers are agents
            on behalf of their principals and are given responsibility for the principals'</p>
        </div>

        <hr className="container" />

        <div className=" container">
          <div className="row">
            {info.results.map((val, key) => {
              return (
                <div className="card shadow-sm p-3 col-md-4 mb-4">
                  <div className="card-content " role="tab" id="headingOne1">

                    <div className="card-body p-0">
                      <a href="#multiCollapseExample2" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">

                        <div className="profile mb-4 mt-3"> <img src="./assets/images/logo.png" alt="card-logo" /> </div>
                        <div className="card-title">
                          {val.title}
                          <p> <small className=""> {val.published_date} </small> </p>
                          <p> <small className=""> {val.byline} </small> </p>
                         
                        </div>
                      </a>
                      <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card-subtitle mt-2">
                          <p> <small className="text-muted">{val.section}</small> </p>
                        </div>
                        <div className="card-text">
                          <p> <small className=" ">{val.abstract} </small> </p>
                        
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}

          </div>
        </div>

        <hr className="container" />





      </>
    )
  }
