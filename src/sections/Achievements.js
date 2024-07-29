import Achievement from "../components/Achievement";
import iEEEImage from "../ieee-image.png";
import softecImage from "../softec.png";
import deansListImage from "../deanlist.png";
import "../css/Achievements.css";
export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <h2 className="achievements-header">My Achievements</h2>
        <div className="all-achievements">
          <Achievement
            achievementImage={iEEEImage}
            achievementData={{
              position: "Top 10",
              competitionName: "iEEExtreme Global Programming Competition",
            }}
          />
          <Achievement
            achievementImage={deansListImage}
            achievementData={{
              position: "Dean's List Of Honors",
            }}
          />
          <Achievement
            achievementImage={softecImage}
            achievementData={{
              position: "Top 5",
              competitionName: "Softec Programming Competiton Lahore",
            }}
          />
        </div>
      </div>
    </section>
  );
}
