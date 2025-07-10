import React from "react";

const QueryInput = ({ query, setQuery, handleSubmit, loading }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows={4}
        placeholder="Ask your legal question..."
        className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default QueryInput;
