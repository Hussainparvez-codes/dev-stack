import { toast } from "react-toastify";

function YourStack({ selectedStack, setSelectedStack }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">
        Your Stack
        </h2>

        <span className="mt-2 inline-block rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-gray-500">
        {selectedStack.length}{" "}
        {selectedStack.length === 1 ? "technology" : "technology"} selected
        </span>
      </div>

      {/* Empty State */}
      {selectedStack.length === 0 ? (
        <div className="mt-8 flex min-h-40 items-center justify-center text-center">
          <p className="max-w-xs text-sm leading-6 text-gray-500">
            Your stack is empty. Add technologies from the list to build your ideal stack.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">

          {/* Selected Technologies */}
          {selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Name + Category */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => {
                  setSelectedStack(
                    selectedStack.filter(
                      (item) => item.id !== technology.id
                    )
                  );
                  toast.success(`${technology.name} removed from your stack!`);
                }}
                className="text-gray-400 transition hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}

          {/* Remove All */}
          <button
            onClick={() => {
              setSelectedStack([]);
              toast.success("All technologies removed from your stack!");
            }}
            className="mt-4 w-full rounded-lg bg-red-50 py-2 text-xs font-medium text-red-500 transition hover:bg-red-100"
          >
            Remove All
          </button>

        </div>
      )}

    </div>
  );
}

export default YourStack;