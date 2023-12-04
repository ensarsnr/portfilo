import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import pngimage from "../assets/images/developer.png";
import { Link } from "react-router-dom";

function Home() {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      // Ekran küçükse resmi gizle
      setIsImageVisible(false);
    } else {
      // Ekran büyükse resmi göster
      setIsImageVisible(true);
    }
  };

  useEffect(() => {
    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde handleResize fonksiyonunu çağır
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      // Component unmounted olduğunda event listener'ı kaldır
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Boş dependency array, sadece bir kere çalışmasını sağlar

  return (
    <>
      <NavBar />
      <div className="bg-[#161616] flex h-screen items-center justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 h-2/3 m-auto text-white w-full bg-[#1F1F1F] border-t-2 border-b-2 border-black">
          {/* Karşılama kısmı */}
          <div className="m-5 sm:m-10 md:m-14">
            <div className="">
              <h1 className="text-[40px] font-bold ">Hey, I'am Name.</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500swhen an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Link to="/project">
              <button className="bg-[#504B85] px-6 py-2 rounded-lg mt-5 md:mt-10">
                My Projects
              </button>
              </Link>
            </div>
          </div>
          {/* Resmin olduğu taraf */}
          {isImageVisible && 
            <img
            src={pngimage}
            className="relative w-5/6 top-14 m-auto"
            />
        }
          
        </div>
      </div>
    </>
  );
}

export default Home;
