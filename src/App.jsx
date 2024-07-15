import React from 'react';

import PdfDownload from './pdfDownload/PdfDownload'
import Navbar from './layout/Navbar';


const App = () => {
  return (
    <div className=''>

      <Navbar />

      <div className='container m-auto text-center '>
        <PdfDownload />
      </div>
    </div>
  );
};

export default App;
