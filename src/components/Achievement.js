export default function Achievement({ achievementImage, achievementData }) {
  return (
    <div className="achievement">
      <img
        src={achievementImage}
        width="400px"
        height="300px"
        alt={achievementData}
      />
      <div className="slide">
        <p className="achievement-name">
          {achievementData.position && (
            <span className="achievement-position">
              {achievementData.position}
            </span>
          )}
          {achievementData.competitionName && (
            <p className="achievement-competition">
              {achievementData.competitionName}
            </p>
          )}
        </p>
      </div>
    </div>
  );
}
