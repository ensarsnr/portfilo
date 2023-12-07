import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import pngimage from "../assets/images/developer.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Home() {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const hrefLinkedin = () => {
    window.location.href =
      "https://www.linkedin.com/in/ensar-%C5%9Fener-b416412a3/";
  };

  const hrefGithub = () => {
    window.location.href = "https://github.com/ensarsnr";
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsImageVisible(false);
    } else {
      setIsImageVisible(true);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-[#161616] flex h-screen items-center justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 h-2/3 m-auto text-white w-full bg-[#1F1F1F] border-t-2 border-b-2 border-black">
          {/* Karşılama kısmı */}
          <div className="m-5 sm:m-10 md:m-14">
            <div className="">
              <motion.div initial={{}}>
                <h1 className="text-[40px] font-bold ">Hey, I'am Name.</h1>
              </motion.div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500swhen an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex justify-start">
                <Link to="/project">
                  <button className="bg-[#504B85] sm:text-[15px] text-[10px] px-6 py-2 rounded-lg mt-8 md:mt-10">
                    My Projects
                  </button>
                </Link>

                <FaGithub
                  onClick={hrefGithub}
                  className="hover:bg-slate-800 rounded-full p-2 hover:cursor-pointer md:mt-8 md:ml-10 mt-4 ml-2"
                  size={60}
                />

                <CiLinkedin
                  onClick={hrefLinkedin}
                  className="hover:bg-slate-800 rounded-full p-2 hover:cursor-pointer md:mt-8 md:ml-10  mt-4 ml-2"
                  size={60}
                />
              </div>
            </div>
          </div>
          {/* Resmin olduğu taraf */}
          {isImageVisible && (
            <motion.div
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={pngimage} className="relative w-5/6 top-14 m-auto" />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
