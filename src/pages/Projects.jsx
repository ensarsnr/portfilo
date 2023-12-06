import React, { Component } from "react";
import NavBar from "../components/NavBar";
import projects from "../api/projects";

class Projects extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="h-screen bg-[#161616]">
          <h1 className="text-center text-7xl text-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent p-16">
            Projects
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 pl-5 pr-5 bg-[#161616]">
            {projects.map((project) => {
              // onclick olduğunda github profilimde ki prıjeye atayacak
              return (
                <div
                  onClick={() => window.open(project.url)}
                  class="hover:cursor-pointer mb-5 hover:hover:bg-gray-700 border-gray-700 bg-gray-800 relative flex  flex-col overflow-hidden rounded-xl  bg-clip-border text-gray-700 shadow-md"
                >
                  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img
                      className="w-full h-52 object-cover"
                      src={project.img}
                      alt="ui/ux review check"
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
                  <div class="flex justify-between">
                    {/* Burada tıklanma işi olduğunda mesela react'a tıkladı react'ın blog kısmına yönlendirsin kendi sayfamdaki */}
                    {/* Daha sonra eklenir */}
                    {project.techs.map((e) => (
                      <span className="hover:bg-black m-2 bg-slate-900 p-1 rounded-full text-slate-100">
                        {e}
                      </span>
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
