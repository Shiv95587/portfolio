import "./Details.css";
import SingleDetail from "./SingleDetail";
function Details({ currentTab }) {
  return (
    <div className="current-tab-details">
      {currentTab === "Skills" && (
        <ul className="details">
          <SingleDetail
            detailName={"MERN Stack"}
            detailDescription={
              "Developed multiple applications using MERN Stack"
            }
          />
          <SingleDetail
            detailName={"Machine Learning"}
            detailDescription={"Build and Used many ML models for prediction"}
          />
          <SingleDetail
            detailName={"Computer Vision"}
            detailDescription={"Worked on OpenCV along with OCR Engine"}
          />
          <SingleDetail
            detailName={"SQL and NoSQL"}
            detailDescription={"Have experience in MySQL and MongoDB Databases"}
          />
        </ul>
      )}
      {currentTab === "Education" && (
        <ul className="details">
          <SingleDetail
            detailName={"2021 - Current"}
            detailDescription={
              "Bachelors in Computer Science at NUCES FAST Univeristy Karachi (CGPA: 3.5)"
            }
          />
          <SingleDetail
            detailName={"2019 - 2021"}
            detailDescription={
              "Matric and Intermediate at Degree College Larkana"
            }
          />
          <SingleDetail
            detailName={"2009 - 2018"}
            detailDescription={
              "Matric and Intermediate at Degree College Larkana"
            }
          />
        </ul>
      )}
      {currentTab === "Experience" && (
        <ul className="details">
          <SingleDetail
            detailName={"2024 Jul - Present"}
            detailDescription={"Fellow @HeadStarter AI"}
          />
        </ul>
      )}
    </div>
  );
}

export default Details;
