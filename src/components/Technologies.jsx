import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { ToastContainer, toast } from "react-toastify";

function Technologies() 
{
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  return (
    <>
      <ToastContainer />
      <section id="technologies" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-8">

          {/* Section Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
               Explore{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 bg-clip-text text-transparent">
               Technologies
              </span>
            </h2>

            <p className="mt-2 text-base text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Technology Cards + Your Stack */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">

           {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3">

              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  selectedStack={selectedStack}
                  setSelectedStack={setSelectedStack}
                 />
              ))}

            </div>

           {/* Your Stack */}
            <div className="lg:col-span-1">
              <YourStack
                selectedStack={selectedStack}
                setSelectedStack={setSelectedStack}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;