import React, { useContext } from "react";
import Logo from "/logo/logo.svg";
import EtibarM from "/signatures/EtibarM.svg";
import Alex from '../../../../../public/signatures/Alex2.png'
import Aynur from '../../../../../public/signatures/Aynur4.png'
import Cavid from "/signatures/Cavid.svg";
import { MainContext, useMainContext } from "../../../../context/context";
import { useState } from "react";
import { useEffect } from "react";

const Content = () => {
  const contentData = {
    "Data Analyst": {
      title:
        "Successfully completed all requirements of the studies and exercises for 190 hours in the intensive Data Science Bootcamp and graduated as Certified Data Analyst and has earned the distinction and credential of Data Science Academy",
      content:
        "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau, SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The candidate has successfully completed the Data Science Bootcamp program and received good grades, is capable of efficiently using the tools for  visualization and data analyzing including Tableau, SPSS, SQL and has strong professional skills. The candidate is capable of inspecting, cleansing, describing, transforming and modeling data with the goal of discovering useful information.",
    },
    Participant: {
      title:
        "Proficiently completed all requirements of the studies and exercises for 190 hours in the intensive Data Science Bootcamp and graduated as Participant and has earned the credential of Data Science Academy",
      content:
        "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau,SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The person has completed the Data Science Bootcamp wit",
    },
    "Data Scientist": {
      title:
        "Proficiently completed all requirements of the studies and exercises for 190 hours in the intensive Data Science Bootcamp and graduated as Certified Data Scientist and has earned the distinction and credential of Data Science Academy",
      content:
        "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau, SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The  candidate is a data expert who proficiently completed the Data Science Bootcamp and achieved exceptional results with technical skills and ability to  solve complex business problems, create a variety of scalable machine learning models for company needs and tracking of its performance. The Data Scientist is well-suited to work in a team, possessing a passion for data science and data analysis, machine learning and creating specific systems and tracking how they perform over time with the goal of discovering useful information with coding skills",
    },
    "Junior Data Scientist": {
      title:
        "Proficiently completed all requirements of the studies and exercises for 190 hours in the intensive Data  Science Bootcamp and graduated as Certified Junior Data Scientist and has earned the distinction and credential of Data Science Academy",
      content:
        "This specialization provided the learner with knowledge of data cleaning, visualization, machine learning and programming using R, Python, Tableau, SPSS, SPSS Modeler, SQL, Hadoop, Spark, Spark SQL, Spark MLlib, Pytorch, AWS, Mongo DB, MapReduce, Hive and Tensorflow tools simultaneously. The participant successfully completed the Data Science Bootcamp with excellent grades and has the necessary programming, analytical, technical, research, business, and software skills such as SPSS, SQL, visualization tools, and to some extent R and Python. A Junior Data Scientist is able to work in a team, possessing a passion for data science and data analysis, machine learning and creating specific systems and tracking how they perform over time, is capable of inspecting, cleansing, describing, transforming and modeling data with the goal of discovering useful information with coding skills.",
    },
  };
  const { selectedValue } = useMainContext();
  const { signature } = useContext(MainContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const { title: newTitle, content: newContent } = contentData[selectedValue];
    setTitle(newTitle);
    // TEST

    setContent(newContent);
  }, [selectedValue]);

  return (
    <div className="print:mx-7 ">
      <div className="px-16 font-montserrat">
        <textarea
          rows="1"
          className="w-full focus:outline-none capitalize pb-2 text-[#181233]  -tracking-wide  my-2 font-normal text-[55px]">
          Xəyal xudiyev
        </textarea>
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          rows="4"
          className="title w-full focus:outline-none text-[26.4px] text-[#181233] text-justify leading-[28px] font-medium tracking-[0.4px] ">
          {title}
        </textarea>
        <textarea
          rows="1"
          className="w-full focus:outline-none text-2xl pb-2 pt-2 text-[29.2px]  text-[#e31f60] font-bold tracking-tight">
          Data Science Bootcamp
        </textarea>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          rows="6"
          className=" content w-full focus:outline-none text-[19.5px] text-[#181233]  tracking-[0.1px]  text-justify leading-[22px] font-[500] my-1">
          {content}
        </textarea>
      </div>

      <div className="flex-col px-10">
        <div className="flex justify-between items-end mt-[2.5rem]">
          <div className="flex  text-start px-8 gap-9">
            <div className="pt-2 relative">
              <img src={EtibarM} alt="" className="absolute bottom-6" />

              <div className=" border-t-[1px] border-black">
                <p className="text-sm font-semibold font-montserrat">Etibar Huseynli</p>
                <p className="text-xs  leading-3">Chief Data Scientist</p>
              </div>
            </div>
            <div className="pt-2 relative">
              <img src={signature === 'Aynur' ? Aynur : signature === 'Alex' ? Alex : null} alt="" className="absolute bottom-[2.5rem] left-[0.5rem]  w-[130px]" />
              <div className=" border-t-[1px] border-black">
                <p className=" text-sm font-semibold font-montserrat">
                  {signature === "Aynur" ? "Aynur Sadigova" : signature === "Alex" ? "Alex Jafarov" : ""}
                </p>
                <p className="text-xs leading-3">Program Manager</p>
              </div>
            </div>
            <div className="pt-2 relative">
              <img src={Cavid} alt="" className="absolute bottom-11 block w-svw " />
              <div className=" border-t-[1px] border-black">
                <p className="text-sm font-semibold font-montserrat">Javid Mammadov</p>
                <p className="text-xs  leading-3">Career Advisor</p>
              </div>
            </div>
          </div>

          <div>
            <img src={Logo} alt="" className="w-72 mr-5 " />
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 text-xs pl-8 ">
          <p className="text-[#959699] font-semibold text-xs">
            The validity of certificate can be verified online at :{" "}
            <a href="http://www.dsa.az/verification">www.dsa.az/verification</a>
          </p>
          <div className="flex gap-0">
            <div className=" flex tracking-[4px] flex-1 items-center text-xs">
              Certificate{" "} {" "} {" "}ID:
              <textarea className="tracking-[4px] focus:outline-none text-xs print:text-xs w-32 mr-8" rows="1">
                SQL-8948780
              </textarea>
            </div>
            <div>
              {/* adsasadasdasdasd */}
              <textarea rows="1" className=" w-44 tracking-[4px] focus:outline-none mt-1">
                September, 30 2023
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
