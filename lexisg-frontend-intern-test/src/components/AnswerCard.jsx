import React from "react";

const AnswerCard = ({ answer, citations, onOpenPDF }) => {
  return (
    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <p className="text-gray-800 mb-4">{answer}</p>
      <div className="text-sm text-blue-800">
        {citations.map((cite, index) => (
          <div key={index} className="mt-2">
            <strong>Source:</strong>{" "}
            <button
              onClick={onOpenPDF}
              className="underline text-blue-600 hover:text-blue-800"
            >
              {cite.source}
            </button>
            <p className="italic mt-1 text-gray-700">“{cite.text}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerCard;
