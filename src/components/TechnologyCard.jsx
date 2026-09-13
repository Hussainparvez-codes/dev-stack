import { toast } from "react-toastify";
function TechnologyCard({
  technology,
  selectedStack,
  setSelectedStack,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-4 flex items-center gap-2">

        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">
          {technology.difficulty}
        </span>

      </div>

      {/* Rating */}
        <div className="mt-4 flex items-center justify-between">
           <span className="text-sm text-yellow-500">
          ⭐ {technology.rating}
           </span>

           <button
               onClick={() => {
               if (selectedStack.some((item) => item.id === technology.id)) {
                toast.warning(`${technology.name} is already in your stack!`);
               return;
               }
                setSelectedStack([...selectedStack, technology]);
                toast.success(`${technology.name} added to your stack!`);

                 setSelectedStack([...selectedStack, technology]);
                  }}

               className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
               selectedStack.some((item) => item.id === technology.id)
               ? "cursor-not-allowed bg-gray-200 text-gray-500"
               : "bg-gray-900 text-white hover:bg-gray-700"
               }`}
               >
               {selectedStack.some((item) => item.id === technology.id)
               ? "✓ Added to Stack"
               : "Add to Stack"}
            </button>
        </div>
    </div>
  );
}

export default TechnologyCard;