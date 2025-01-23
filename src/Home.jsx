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

      <div>
        This site is a work in process. Complete version will be finished during
        first class period.
      </div>

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
        <div className="classInstance">
          <div className="classDate">February 4th</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className="lectureTitle">
              What is this class? What is it not?
            </div>
            <div className="lectureNotesLink">
              <a href={baseGithubUrl + "1 introduction.pptx"}>Slides</a>
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:00</div>
            <div className="lectureTitle">
              Form teams, assign roles, and choose projects
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:30</div>
            <div className="lectureTitle">
              Setup ADO, create first PBIs, prove a pull request
            </div>
          </div>
        </div>

        <div className="classInstance">
          <div className="classDate">February 11th</div>
          <div className="sprintSchedule">Sprint 1 Pre-Planning</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className="lectureTitle">Scrum Process and Estimation</div>
            <div className="lectureNotesLink">
              <a href={baseGithubUrl + "2 estimation.pptx"}>Slides</a>
            </div>
          </div>
        </div>

        <div className="classInstance">
          <div className="classDate">February 18th</div>
          <div className="sprintSchedule">Sprint 1 Planning</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className="team1">{team1Name}</div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className="team2">{team2Name}</div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:30</div>
            <div className="lectureTitle">Sprint Transistions</div>
            <div className="lectureNotesLink">
              <a href={baseGithubUrl + "2 estimation.pptx"}>Slides</a>
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">8:15</div>
            <div className="team3">{team3Name}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
