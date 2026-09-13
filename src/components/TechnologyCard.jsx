import { toast } from "react-toastify";

function TechnologyCard({
  technology,
  selectedStack,
  setSelectedStack,
}) {
  const isAdded = selectedStack.some(
    (item) => item.id === technology.id
  );

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

      {/* Category + Difficulty + Rating */}
      <div className="mt-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
            {technology.category}
          </span>

          <span className="text-xs text-gray-500">
            {technology.difficulty}
          </span>
        </div>

        <span className="text-sm text-yellow-500">
          ⭐ {technology.rating}
        </span>

      </div>

      {/* Add to Stack */}
      <button
        onClick={() => {
          if (isAdded) {
            toast.warning(
              `${technology.name} is already in your stack!`
            );
            return;
          }

          setSelectedStack([...selectedStack, technology]);

          toast.success(
            `${technology.name} added to your stack!`
          );
        }}
        className={`mt-4 w-full rounded-lg px-4 py-2.5 text-xs font-medium text-center transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;