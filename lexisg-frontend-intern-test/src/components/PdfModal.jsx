import React, { useEffect, useRef } from "react";

const PDFModal = ({ onClose }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Simulate scroll to Paragraph 7
    const timer = setTimeout(() => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.contentWindow.scrollTo({ top: 600, behavior: "smooth" });
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 h-[90vh] rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
        <iframe
          ref={iframeRef}
          src="/Dani_Devi_v_Pritam_Singh.pdf"
          className="w-full h-full rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default PDFModal;
