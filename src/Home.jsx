import { useCallback, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Home.css";
import TeamScheduleItem from "./TeamScheduleItem";

const baseGithubUrl =
  "https://github.com/spazard1/softwareprocess2025 23:00/raw/refs/heads/main/files/";

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

  const getTeam = useCallback(
    (schedule) => {
      let teamNumber;
      let teamName;
      switch (schedule) {
        case 1:
          teamNumber = earlyTeamRef.current;
          teamName = getTeamName(earlyTeamRef.current);
          earlyTeamRef.current = (earlyTeamRef.current % 3) + 1;
          break;
        case 2:
          teamNumber = middleTeamRef.current;
          teamName = getTeamName(middleTeamRef.current);
          middleTeamRef.current = (middleTeamRef.current % 3) + 1;
          break;
        case 3:
          teamNumber = lateTeamRef.current;
          teamName = getTeamName(lateTeamRef.current);
          lateTeamRef.current = (lateTeamRef.current % 3) + 1;
          break;
      }
      return { number: teamNumber, name: teamName };
    },
    [getTeamName]
  );

  earlyTeamRef.current = 1;
  middleTeamRef.current = 2;
  lateTeamRef.current = 3;

  return (
    <>
      <div className="title">Bethel Software Process 2025</div>

      <div className="importantLinksContainer">
        <a href={baseGithubUrl + "COS420 Syllabus 2025.docx"}>Syllabus</a>
        <a href="https://moodle.bethel.edu/course/view.php?id=107396">Moodle</a>
      </div>

      <Accordion className="teamsInformation" data-bs-theme="dark">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className={"roundedTag team1"}>{team1Name}</div>
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
            <div className={"roundedTag team2"}>{team2Name}</div>
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
            <div className={"roundedTag team3"}>{team3Name}</div>
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

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("February 4 2025 23:00")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">February 4th</div>
            </div>
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
          new Date(Date.parse("February 11 2025 23:00")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">February 11th</div>
              <div className="roundedTag sprintSchedule">
                Sprint 1 Pre-Planning
              </div>
            </div>
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
          new Date(Date.parse("February 18 2025 23:00")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">February 18th</div>
              <div className="roundedTag sprintSchedule">Sprint 1 Planning</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <TeamScheduleItem scheduleTime={"6:00"} team={getTeam(1)} />
            <TeamScheduleItem scheduleTime={"6:45"} team={getTeam(2)} />
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">7:30</div>
              <div className="lectureTitle">Sprint Transitions</div>
              <div className="lectureNotesLink">
                <a href={baseGithubUrl + "3 sprint transitions"}>Slides</a>
              </div>
            </div>
            <TeamScheduleItem scheduleTime={"8:15"} team={getTeam(3)} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("February 25 2025 23:00")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">February 25th</div>
              <div className="roundedTag sprintSchedule">Sprint 1</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <TeamScheduleItem scheduleTime={"6:00"} team={getTeam(1)} />
            <TeamScheduleItem scheduleTime={"6:45"} team={getTeam(2)} />
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">7:30</div>
              <div className="lectureTitle">Product Managers</div>
              <div className="lectureNotesLink">
                <a href={baseGithubUrl + "4 product managers.pptx"}>Slides</a>
              </div>
            </div>
            <TeamScheduleItem scheduleTime={"8:15"} team={getTeam(3)} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("March 4 2025 23:00")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">March 4th</div>
              <div className="roundedTag scheduleAlert">Online Class</div>
              <div className="roundedTag sprintSchedule">Sprint 1</div>
              <div className="roundedTag sprintSchedule">
                Sprint 2 Pre-Planning
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <TeamScheduleItem scheduleTime={"6:00"} team={getTeam(1)} />
            <TeamScheduleItem scheduleTime={"6:45"} team={getTeam(2)} />
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">7:30</div>
              <div className="lectureTitle">Performance Reviews</div>
              <div className="lectureNotesLink">
                <a href={baseGithubUrl + "5 performance reviews.pptx"}>
                  Slides
                </a>
              </div>
            </div>
            <TeamScheduleItem scheduleTime={"8:15"} team={getTeam(3)} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion className="scheduleContainer" data-bs-theme="dark">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">March 11th - Spring Break</div>
            </div>
          </Accordion.Header>
        </Accordion.Item>
      </Accordion>

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("March 18 2025 23:00")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">March 18th</div>
              <div className="roundedTag sprintSchedule">Sprint 2 Planning</div>
              <div className="roundedTag reviewSchedule">
                Performance Review Due
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <TeamScheduleItem scheduleTime={"6:00"} team={getTeam(1)} />
            <TeamScheduleItem scheduleTime={"6:45"} team={getTeam(2)} />
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">7:30</div>
              <div className="lectureTitle">Five Disfunctions of a Team</div>
              <div className="lectureNotesLink"></div>
            </div>
            <TeamScheduleItem scheduleTime={"8:15"} team={getTeam(3)} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        className="scheduleContainer"
        data-bs-theme="dark"
        defaultActiveKey={
          new Date(Date.parse("March 25 2025 23:00")) > new Date() ? "1" : ""
        }
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="classScheduleHeader">
              <div className="classDate">March 25th</div>
              <div className="roundedTag sprintSchedule">Sprint 2</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <TeamScheduleItem scheduleTime={"6:00"} team={getTeam(1)} />
            <TeamScheduleItem scheduleTime={"6:45"} team={getTeam(2)} />
            <div className="classScheduleItem">
              <div className="classScheduleItemTime">7:30</div>
              <div className="lectureTitle">Five Disfunctions of a Team</div>
              <div className="lectureNotesLink"></div>
            </div>
            <TeamScheduleItem scheduleTime={"8:15"} team={getTeam(3)} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Home;
