import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import Axios from "axios";

function AppProject () {
    const [appProjects, setAppProjects] = useState();
    const url = "https://portofolio-api.onrender.com/server/app";
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

      const listItems = appProjects?.map(appProject => (
        <div className="col-sm-12 col-lg-6">
            <div class="project">
                <div class="app-row">
                    <img alt="" class="left app-image" src={appProject.image} width="1150" height="700"/>
                    <span>
                        <h2>{ appProject.title }</h2>
                        { 'play_store' in appProject? 
                    <a className="apps-link" href={appProject.play_store}><i class="fa-brands fa-google-play fa-xl"></i></a>
                    : null}
                    { 'github' in appProject? 
                    <a className="apps-link" href={appProject.github}><i class="fa-brands fa-github fa-xl"></i></a>
                    : null}
                    { 'ios_store' in appProject? 
                    <a className="apps-link" href={appProject.ios_store}><i class="fa-brands fa-app-store-ios fa-xl"></i></a>
                    : null}
                        <h5><span class="pro-span">{ appProject.role }</span></h5>
                    </span>
                    <p>{ appProject.description }</p>
                    
                </div>
                {/* <button class="button-55"><i class="fa-brands fa-github fa-xl"></i> Github </button> */}
            </div>
        </div>
    ));

    return (
        <div className="main-body">
            <h1>App Project</h1>
            {!appProjects? "Is Loading .. ":  <div className="row align-items-start">
            {listItems}
            </div>}
        </div>
    );
}

export default AppProject;