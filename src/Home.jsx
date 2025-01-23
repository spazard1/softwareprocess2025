import { useCallback, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Home.css";

const baseGithubUrl =
  "https://github.com/spazard1/softwareprocess2025/raw/refs/heads/main/files/";

const team1Name = "Team 1";
const team2Name = "Team 2";
const team3Name = "Team 3";

const Home = () => {
  const earlyTeamRef = useRef(1);
  const middleTeamRef = useRef(2);
  const lateTeamRef = useRef(3);

  const getTeamName = useCallback((teamNumber) => {
    switch (teamNumber) {
      case 1:
        return team1Name;
      case 2:
        return team2Name;
      case 3:
        return team3Name;
    }
  }, []);

  const getTeamNumberForSchedule = useCallback((schedule) => {
    switch (schedule) {
      case 1:
        return earlyTeamRef.current;
      case 2:
        return middleTeamRef.current;
      case 3:
        return lateTeamRef.current;
    }
  }, []);

  const getTeamNameForScheduleAndAdvance = useCallback(
    (schedule) => {
      let teamName;
      switch (schedule) {
        case 1:
          teamName = getTeamName(earlyTeamRef.current);
          earlyTeamRef.current = (earlyTeamRef.current % 3) + 1;
          break;
        case 2:
          teamName = getTeamName(middleTeamRef.current);
          middleTeamRef.current = (middleTeamRef.current % 3) + 1;
          break;
        case 3:
          teamName = getTeamName(lateTeamRef.current);
          lateTeamRef.current = (lateTeamRef.current % 3) + 1;
          break;
      }
      return teamName;
    },
    [getTeamName]
  );

  earlyTeamRef.current = 1;
  middleTeamRef.current = 2;
  lateTeamRef.current = 3;

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

      <Accordion className="teamsInformation" data-bs-theme="dark">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className={"team1"}>{team1Name}</div>
          </Accordion.Header>
          <Accordion.Body>
            <div>Project</div>
            <div>Member 1 - Scrum Master</div>
            <div>Member 2 - PM</div>
            <div>Member 3 - Engineer</div>
            <div>Member 4 - Engineer</div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className={"team2"}>{team2Name}</div>
          </Accordion.Header>
          <Accordion.Body>
            <div>Project</div>
            <div>Member 1 - Scrum Master</div>
            <div>Member 2 - PM</div>
            <div>Member 3 - Engineer</div>
            <div>Member 4 - Engineer</div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <div className={"team3"}>{team3Name}</div>
          </Accordion.Header>
          <Accordion.Body>
            <div>Project</div>
            <div>Member 1 - Scrum Master</div>
            <div>Member 2 - PM</div>
            <div>Member 3 - Engineer</div>
            <div>Member 4 - Engineer</div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="colorKeyContainer">
        Color Key:
        <div className="sprintSchedule">Sprints</div>
        <div className="reviewSchedule">Reviews</div>
      </div>

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("February 4 2025")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classDate">February 4th</div>
          </Accordion.Header>
          <Accordion.Body>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("February 11 2025")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classDate">February 11th</div>
            <div className="sprintSchedule">Sprint 1 Pre-Planning</div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">6:00</div>
              <div className="lectureTitle">Scrum Process and Estimation</div>
              <div className="lectureNotesLink">
                <a href={baseGithubUrl + "2 estimation.pptx"}>Slides</a>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("February 18 2025")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classDate">February 18th</div>
            <div className="sprintSchedule">Sprint 1 Planning</div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">6:00</div>
              <div className={"team" + getTeamNumberForSchedule(1)}>
                {getTeamNameForScheduleAndAdvance(1)}
              </div>
            </div>
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">6:45</div>
              <div className={"team" + getTeamNumberForSchedule(2)}>
                {getTeamNameForScheduleAndAdvance(2)}
              </div>
            </div>
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">7:30</div>
              <div className="lectureTitle">Sprint Transitions</div>
              <div className="lectureNotesLink">
                <a href={baseGithubUrl + "3 sprint transitions"}>Slides</a>
              </div>
            </div>
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">6:45</div>
              <div className={"team" + getTeamNumberForSchedule(3)}>
                {getTeamNameForScheduleAndAdvance(3)}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="scheduleContainer">
        <div className="classInstance">
          <div className="classDate">February 18th</div>
          <div className="sprintSchedule">Sprint 1 Planning</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className={"team" + getTeamNumberForSchedule(1)}>
              {getTeamNameForScheduleAndAdvance(1)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(2)}>
              {getTeamNameForScheduleAndAdvance(2)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:30</div>
            <div className="lectureTitle">Sprint Transitions</div>
            <div className="lectureNotesLink">
              <a href={baseGithubUrl + "3 sprint transitions"}>Slides</a>
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(3)}>
              {getTeamNameForScheduleAndAdvance(3)}
            </div>
          </div>
        </div>

        <div className="classInstance">
          <div className="classDate">February 25th</div>
          <div className="sprintSchedule">Sprint 1</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className={"team" + getTeamNumberForSchedule(1)}>
              {getTeamNameForScheduleAndAdvance(1)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(2)}>
              {getTeamNameForScheduleAndAdvance(2)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:30</div>
            <div className="lectureTitle">Product Managers</div>
            <div className="lectureNotesLink">
              <a href={baseGithubUrl + "4 product managers.pptx"}>Slides</a>
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(3)}>
              {getTeamNameForScheduleAndAdvance(3)}
            </div>
          </div>
        </div>

        <div className="classInstance">
          <div className="classDate">March 4th</div>
          <div className="sprintSchedule">Sprint 1, Sprint 2 Pre-Planning </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className={"team" + getTeamNumberForSchedule(1)}>
              {getTeamNameForScheduleAndAdvance(1)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(2)}>
              {getTeamNameForScheduleAndAdvance(2)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:30</div>
            <div className="lectureTitle">Performance Reviews</div>
            <div className="lectureNotesLink">
              <a href={baseGithubUrl + "5 performance reviews.pptx"}>Slides</a>
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(3)}>
              {getTeamNameForScheduleAndAdvance(3)}
            </div>
          </div>
        </div>

        <div className="classInstance">
          <div className="classDate">March 11th</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">Spring break</div>
          </div>
        </div>

        <div className="classInstance">
          <div className="classDate">March 18th</div>
          <div className="sprintSchedule">Sprint 2 Planning</div>
          <div className="reviewSchedule">First Performance Review Due</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className={"team" + getTeamNumberForSchedule(1)}>
              {getTeamNameForScheduleAndAdvance(1)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(2)}>
              {getTeamNameForScheduleAndAdvance(2)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:30</div>
            <div className="lectureTitle">Performance Reviews</div>
            <div className="lectureNotesLink">
              <a href={baseGithubUrl + "5 performance reviews.pptx"}>Slides</a>
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(3)}>
              {getTeamNameForScheduleAndAdvance(3)}
            </div>
          </div>
        </div>

        <div className="classInstance">
          <div className="classDate">March 25th</div>
          <div className="sprintSchedule">Sprint 2</div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:00</div>
            <div className={"team" + getTeamNumberForSchedule(1)}>
              {getTeamNameForScheduleAndAdvance(1)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(2)}>
              {getTeamNameForScheduleAndAdvance(2)}
            </div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">7:30</div>
            <div className="lectureTitle">Five Disfunctions of a Team</div>
            <div className="lectureNotesLink"></div>
          </div>
          <div className="classScheduleItem">
            <div className="classScheduleItemTime">6:45</div>
            <div className={"team" + getTeamNumberForSchedule(3)}>
              {getTeamNameForScheduleAndAdvance(3)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
