function CodeShowcase({ title = "SolarMap.jsx", code }) {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {title}
          </span>
        </div>

        <span className="text-xs font-medium text-(--secondary) dark:text-(--secondary-dark)">
          React + ArcGIS
        </span>
      </div>

      <div className="overflow-x-auto bg-gray-50 dark:bg-gray-950">
        <pre className="p-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeShowcase;
