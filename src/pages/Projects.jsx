import React, { Component } from "react";
import NavBar from "../components/NavBar";
import projects from "../api/projects";

class Projects extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="h-screen bg-[#161616]">
          <h1 className="text-center font-extrabold text-7xl text-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 p-16">
            <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              Projects
            </span>
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 pl-5 pr-5 bg-[#161616]">
            {projects.map((project) => {
              // onclick olduğunda github profilimde ki prıjeye atayacak
              return (
                <div
                  onClick={() => window.open(project.url)}
                  class="hover:cursor-pointer mb-5 hover:hover:bg-gray-700 border-gray-700 bg-gray-800  flex  flex-col overflow-hidden rounded-xl  bg-clip-border text-gray-700 shadow-md"
                >
                  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img
                      className="w-full h-52 object-cover"
                      src={project.img}
                      alt="no image uploaded yet"
                    />
                  </div>
                  <div class="p-6">
                    <h4 class="text-white block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {project.name}
                    </h4>
                    <p class="text-gray-400 block mt-3 font-sans  antialiased font-normal leading-relaxed ">
                      {project.desc}
                    </p>
                  </div>
                  <div className="border-t-black border-2 mb-2"></div>
                  <h1 className="text-center text-white text-2xl mb-3">
                    Tech Stack
                  </h1>
                  <div class="grid grid-cols-3 ">
                    {project.techs.map((e) => (
                      <div className="m-1 text-center bg-slate-900 p-1 rounded-full text-slate-100">
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
