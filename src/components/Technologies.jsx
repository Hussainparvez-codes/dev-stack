import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { ToastContainer } from "react-toastify";

function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching technologies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <ToastContainer />

      <section id="technologies" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-8">

          {/* Section Heading */}
          <div>
            <h2 className="text-4xl md:text-[42px] font-bold text-gray-900">
              Explore the {" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mt-2 text-[19px] text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Technology Cards + Your Stack */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">

            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3">

              {loading ? (
                // Loading Spinner
                <div className="col-span-full flex flex-col items-center justify-center py-12">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500"></div>

                  <p className="mt-4 text-sm text-gray-500">
                    Loading technologies...
                  </p>
                </div>
              ) : (
                technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    selectedStack={selectedStack}
                    setSelectedStack={setSelectedStack}
                  />
                ))
              )}
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