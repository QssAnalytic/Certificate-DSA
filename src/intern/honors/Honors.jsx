import React from 'react'
import HonorsBG from '/intern/honors.svg'
import EtibarM from '/signatures/EtibarM.svg'

const Honors = () => {
  return (
    <div className='relative flex items-center justify-center flex-col text-[#0f4085]  '>
      <img src={HonorsBG} alt="" className='print:w-full  ' />

      <div className='flex flex-col absolute mt-32 w-[40%] left-[340px] pr-2 h-fit print:left-[60px] print:pr-0 print:w-[72%]' >

        <p className='text-end mb-2 text-xl lead4'>This is to certify that</p>

        <textarea rows='1' className='text-end font-kunstler text-[#20497d] text-[90px] w-full -mb-5 focus:outline-none mx-auto '>Khayal Khudiyev</textarea>

        <textarea rows={1} className='focus:outline-none text-end  text-lg'>has successfully completed 3 months Data Science Internship at</textarea>
        <textarea rows={1} className='focus:outline-none text-end -mt-1 text-lg'>QSS Analytics onOctober 14 , 2023</textarea>
        <textarea rows={3} className='focus:outline-none tracking-wider mt-14 leading-5 print:w-[87%] '>
          Special note: During working process, successfully completion
          of most assigned tasks and his positive habits and qualities
          enable Gurban to be a professional expert in the future
        </textarea>
        <div className=' flex flex-col   text-start mt-7 '>
          <p>Accomplished programs during internship:</p>
          <textarea rows="1" className='focus:outline-none leading-4'>•  Data Science for Python</textarea>
          <textarea rows="1" className='focus:outline-none leading-6'>•  Machine Learning with Python</textarea>
          <textarea rows="1" className='focus:outline-none leading-6'>•  Deep Learning with Python</textarea>
          <textarea rows="1" className='focus:outline-none leading-6'>•  SQL for Data Science</textarea>
          <textarea rows="1" className='focus:outline-none leading-6'>•  Introduction to Big Data</textarea>
          <textarea rows="1" className='focus:outline-none leading-6'>•  Data Analytics with Excel</textarea>
          <textarea rows="1" className='focus:outline-none leading-6'></textarea>
          <textarea rows="1" className='focus:outline-none leading-6'></textarea>
          <textarea rows="1" className='focus:outline-none leading-6'></textarea>
          <textarea rows="1" className='focus:outline-none leading-6'></textarea>
        </div>
      </div>

      <div className='absolute bottom-9 left-[26%] print:left-[60px] print:bottom-14'>
        <img src={EtibarM} alt="" className=' m-4 -mb-2 print:m-0' />

        <hr className='border-black  border border-t-0' />

        <p className='uppercase tracking-wide '>Etibar Huseynli</p>
        <p className='text-start mt-2 leading-5'>Director of QSS <br /> Analytics</p>
      </div>

    </div>
  )
}

export default Honors