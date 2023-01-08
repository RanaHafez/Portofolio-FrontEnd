import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import Axios from "axios";

function PythonProject() {
    const [pyProjects, setPythonProjects] = useState();
    const url = "https://portofolio-api.onrender.com/server/python";
    useEffect(() => {
        Axios.get(url).then((res) => {
            console.log("Insode the then function");
            setPythonProjects(res.data.projects);
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

      const listItems = pyProjects?.map(pyProject => (
        <div className="col-sm-12 col-lg-6">
            <div class="project mar">
                <img className="web-image" src={ pyProject.image } alt="img"/>
                <div>
                    <span>
                        <h2 className='project-title'>{ pyProject.title }</h2> <a className="github-button" href={pyProject.github}><i class="fa-brands fa-github fa-xl"></i></a>
                    </span>
                    <hr style={{ clear:"both"}}/>
                    <p>{  pyProject.description }</p>
                </div>
                {/* <button class="button-55"><i class="fa-brands fa-github fa-xl"></i> Github </button> */}
            </div>
        </div>
    ));

    return (
        <div className="main-body">
            <h1>Python Projects</h1>
            {!pyProjects? "Is Loading .. ":  <div className="row align-items-start">
            {listItems}
        </div>}
    </div>
    );
}

export default PythonProject;