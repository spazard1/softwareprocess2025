import "./Home.css";

const baseGithubUrl =
  "https://github.com/spazard1/softwareprocess2025/raw/refs/heads/main/files/";

const team1Name = "Team 1 Name";
const team2Name = "Team 2 Name";
const team3Name = "Team 3 Name";

const Home = () => {
  return (
    <>
      <div>Bethel Software Process 2025</div>

      <div className="importantLinksContainer">
        <a href={baseGithubUrl + "COS420 Syllabus 2025.docx"}>Syllabus</a>
        <a href="https://moodle.bethel.edu/course/view.php?id=107396">Moodle</a>
      </div>

      <div className="teamContainer">
        <div className="team1">{team1Name}</div>
        <div className="team2">{team2Name}</div>
        <div className="team3">{team3Name}</div>
      </div>

      <div className="scheduleContainer">
        <div className="scheduleItem">
          <div className="classDate">February 4th</div>
          <div className="lectureTitle">
            What is this class? What is it not? teams, projects, roles
            <br />
            <a href={baseGithubUrl + "1 introduction.pptx"}>Lecture Slides</a>
          </div>
        </div>

        <div className="scheduleItem">
          <div className="classDate">February 11th</div>
          <div className="lectureTitle">
            Scrum Process and Estimation
            <br />
            <a href={baseGithubUrl + "2 estimation.pptx"}>Lecture Slides</a>
          </div>
        </div>

        <div className="scheduleItem">
          <div className="classDate">February 18th</div>
          <div>
            6:00 - 6:45 <div className="team1">{team1Name}</div>
          </div>
          <div>
            6:45 - 7:30 <div className="team2">{team2Name}</div>
          </div>
          <div className="lectureTitle">
            7:30 - 8:15 Sprint Transistions
            <br />
            <a href={baseGithubUrl + "2 estimation.pptx"}>Lecture Slides</a>
          </div>
          <div>
            8:15 - 9:00 <div className="team3">{team3Name}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
