import { Routes, Route } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useContext, useRef, useState } from "react";
import Course from "../course/Course";
import Normal from "../intern/normal/Normal";
import Honors from "../intern/honors/Honors";
import { MainContext } from "../context/context";

export default function PdfDownload() {
  const certificateRef = useRef();
  const { setSignature } = useContext(MainContext);
  const [open, setOpen] = useState(false);
  const downloadPdf = useReactToPrint({ content: () => certificateRef.current });

  return (
    <div className="pdf-download">
      <div className="certificate" ref={certificateRef}>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/intern/normal" element={<Normal />} />
          <Route path="/intern/honors" element={<Honors />} />
        </Routes>
      </div>

      <div className="self-end w-full px-10 my-4">
        <button onClick={downloadPdf} className="w-full my-3">
          <a
            href="#_"
            className="relative w-96 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-96 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-96 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease w-96">
              Download
            </span>
          </a>
        </button>
        <div className="select-signature relative">
          <div className="select-container bg-[#eaccea] h-10 px-4 py-2 rounded cursor-pointer">
            <div onClick={() => setOpen((prev) => !prev)} className="flex items-center justify-center gap-[20px]">
              <p>Select Signature</p>
              <button>+</button>
            </div>
            {open ? (
              <div className="signature-list absolute top-[40px] left-0 bg-slate-300 w-full">
                <ul className="w-full">
                  <li className="hover:bg-[#eaeaea] hover:text-blue-500 px-4 py-2" onClick={() => setSignature("Alex")}>
                    Alex
                  </li>
                  <li
                    className="hover:bg-[#eaeaea] hover:text-blue-500 px-4 py-2"
                    onClick={() => setSignature("Aynur")}>
                    Aynur
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <h1 className="mt-2">&copy; 2024 by Xəyal C. Xudiyev</h1>
      </div>
    </div>
  );
}
