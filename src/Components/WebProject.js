import React, { useState, useEffect } from 'react';
// import '../App.css';
import Axios from "axios";

function WebProject(){
    const [webProjects, setAppProjects] = useState();
    const url = "https://portofolio-api.onrender.com/server/web";
    useEffect(() => {
        Axios.get(url).then((res) => {
            console.log("Insode the then function");
            setAppProjects(res.data.projects);
        }).catch(function (error) {
            console.log("Insode the catch function");
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
        // fetch("https://portofolio-api.onrender.com/server/app")
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(url);
        //     setWebProjects(data.projects);
        //   });
      }, []);

    const listItems = webProjects?.map(webProject => (
        <div className="col-sm-12 col-lg-6">
            <div class="project">
                <img className="web-image" src={ webProject.image } alt="img"/>
                <div>
                    <span>
                        <h2 className='project-title'>{ webProject.title }</h2> <a className="github-button" href={webProject.github}><i class="fa-brands fa-github fa-xl"></i></a>
                    </span>
                    <hr style={{ clear:"both"}}/>
                    <p>{  webProject.description }</p>
                </div>
                {/* <button class="button-55"><i class="fa-brands fa-github fa-xl"></i> Github </button> */}
            </div>
        </div>
    ));
    return (
        <div className='main-body'>
            <h1>Web Project</h1>
            <div className="container projects-container">
            {!webProjects? "Is Loading .. ":  <div className="row align-items-start">
            {listItems}
            </div>}

            </div>
        </div>
    );
}

export default WebProject;