import React, { useState } from "react";
import QueryInput from "./components/QueryInput";
import AnswerCard from "./components/AnswerCard";
import PDFModal from "./components/PDFModal";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [citations, setCitations] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim().toLowerCase();

    const genericInputs = ["", "hi", "hello", "hey", "test"];
    if (genericInputs.includes(trimmed)) {
      setError("❌ Please enter a valid legal question.");
      setAnswer(null);
      setCitations([]);
      return;
    }

    const legalKeywords = [
      "section",
      "compensation",
      "motor vehicles act",
      "claim",
      "court",
      "tribunal",
      "judgment",
      "deceased",
      "future prospects"
    ];

    const containsLegalKeyword = legalKeywords.some((keyword) =>
      trimmed.includes(keyword)
    );

    if (!containsLegalKeyword) {
      setError(
        "❌ Your question does not seem legal in nature. Please include legal terms like 'section', 'compensation', etc."
      );
      setAnswer(null);
      setCitations([]);
      return;
    }

    setLoading(true);
    setError("");

    const response = {
      answer:
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      citations: [
        {
          text: "As the age of the deceased at the time of accident was held to be about 54–55 years... 10% of annual income should have been awarded on account of future prospects.",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "/Dani_Devi_v_Pritam_Singh.pdf"
        }
      ]
    };

    setTimeout(() => {
      setAnswer(response.answer);
      setCitations(response.citations);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Lexi Legal Assistant</h1>
        <QueryInput
          query={query}
          setQuery={setQuery}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        {error && (
          <div className="text-red-600 bg-red-100 border border-red-300 p-3 rounded mt-4">
            {error}
          </div>
        )}
        {answer && (
          <AnswerCard
            answer={answer}
            citations={citations}
            onOpenPDF={() => setShowModal(true)}
          />
        )}
      </div>
      {showModal && (
        <PDFModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
