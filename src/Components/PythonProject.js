import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';

function PythonProject() {
    const [pyProjects, setWebProjects] = useState();
    // console.log(data);
    useEffect(() => {
        fetch("/server/python")
          .then((res) => res.json())
          .then((data) => {
            console.log("This is data", data.projects);
            setWebProjects(data.projects)
          });
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
            <h1>App Project</h1>
            {!pyProjects? "Is Loading .. ":  <div className="row align-items-start">
            {listItems}
        </div>}
    </div>
    );
}

export default PythonProject;