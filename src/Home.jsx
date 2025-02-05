import { useCallback, useMemo, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import TeamScheduleItem from "./TeamScheduleItem";
import TeamsInformation from "./TeamsInformation";

import "./Home.css";

const baseGithubUrl =
  "https://github.com/spazard1/softwareprocess2025/raw/refs/heads/main/files/";

const team1Name = "Team 1";
const team2Name = "Team 2";
const team3Name = "Team 3";

const firstSlot = "6:00";
const secondSlot = "6:45";
const thirdSlot = "7:30";
const fourthSlot = "8:15";

const Home = () => {
  const earlyTeamRef = useRef();
  const middleTeamRef = useRef();
  const lateTeamRef = useRef();
  earlyTeamRef.current = 1;
  middleTeamRef.current = 2;
  lateTeamRef.current = 3;

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
      let time;
      switch (schedule) {
        case 1:
          time = firstSlot;
          teamNumber = earlyTeamRef.current;
          teamName = getTeamName(earlyTeamRef.current);
          earlyTeamRef.current = (earlyTeamRef.current % 3) + 1;
          break;
        case 2:
          time = secondSlot;
          teamNumber = middleTeamRef.current;
          teamName = getTeamName(middleTeamRef.current);
          middleTeamRef.current = (middleTeamRef.current % 3) + 1;
          break;
        case 3:
          time = fourthSlot;
          teamNumber = lateTeamRef.current;
          teamName = getTeamName(lateTeamRef.current);
          lateTeamRef.current = (lateTeamRef.current % 3) + 1;
          break;
      }
      return { time, teamNumber: teamNumber, teamName: teamName };
    },
    [getTeamName]
  );

  const schedules = useMemo(
    () => [
      {
        date: "February 4",
        slots: [
          {
            time: firstSlot,
            title: "What is this class? What is it not?",
            link: {
              title: "Slides",
              url: baseGithubUrl + "1 introduction.pptx",
            },
          },
          {
            time: "7:00",
            title: "Form teams, assign roles, and choose projects",
            link: { title: "Projects", url: "/projects" },
          },
          {
            time: "7:30",
            title: "Setup ADO, create first PBIs, prove a pull request",
          },
        ],
      },
      {
        date: "February 11",
        tags: [{ type: "sprintSchedule", title: "Sprint 1 Pre-Planning" }],
        slots: [
          {
            time: firstSlot,
            title: "Scrum Process and Estimation",
            link: {
              title: "Slides",
              url: baseGithubUrl + "2 estimation.pptx",
            },
          },
          {
            time: "7:00",
            title: "Create initial PBIs for Sprint 1",
          },
        ],
      },
      {
        date: "February 18",
        tags: [{ type: "sprintSchedule", title: "Sprint 1 Planning" }],
        slots: [
          getTeam(1),
          getTeam(2),
          {
            time: thirdSlot,
            title: "Sprint Transitions",
            link: {
              title: "Slides",
              url: baseGithubUrl + "3 sprint transitions.pptx",
            },
          },
          getTeam(3),
        ],
      },
      {
        date: "February 25",
        tags: [{ type: "sprintSchedule", title: "Sprint 1" }],
        slots: [
          getTeam(1),
          getTeam(2),
          {
            time: thirdSlot,
            title: "Product Managers",
            link: {
              title: "Slides",
              url: baseGithubUrl + "4 product managers.pptx",
            },
          },
          getTeam(3),
        ],
      },
      {
        date: "March 4",
        tags: [
          { type: "scheduleAlert", title: "Online Lecture" },
          { type: "sprintSchedule", title: "Sprint 1" },
          { type: "sprintSchedule", title: "Sprint 2 Pre-Planning" },
        ],
        slots: [
          getTeam(1),
          getTeam(2),
          {
            time: thirdSlot,
            title: "Performance Reviews",
            link: {
              title: "Slides",
              url: baseGithubUrl + "5 performance reviews.pptx",
            },
          },
          getTeam(3),
        ],
      },
      {
        date: "March 11",
        tags: [{ type: "scheduleAlert", title: "Spring Break" }],
      },
      {
        date: "March 18",
        tags: [
          { type: "reviewSchedule", title: "Performance Review Due" },
          { type: "sprintSchedule", title: "Sprint 2 Planning" },
        ],
        slots: [
          getTeam(1),
          getTeam(2),
          {
            time: thirdSlot,
            title: "5 Disfunctions of a Team",
          },
          getTeam(3),
        ],
      },
    ],
    [getTeam]
  );

  return (
    <>
      <div className="title">Bethel Software Process 2025</div>

      <TeamsInformation
        team1Name={team1Name}
        team2Name={team2Name}
        team3Name={team3Name}
        baseGithubUrl={baseGithubUrl}
      />

      {schedules.map((schedule) => (
        <Accordion
          key={schedule.date}
          className="scheduleContainer"
          data-bs-theme="dark"
          defaultActiveKey={
            new Date(Date.parse(schedule.date + " 2025 23:00")) > new Date()
              ? "1"
              : ""
          }
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="classScheduleHeader">
                <div className="classDate">{schedule.date}</div>
                {schedule.tags?.map((tag) => (
                  <div className={"roundedTag " + tag.type} key={tag.title}>
                    {tag.title}
                  </div>
                ))}
              </div>
            </Accordion.Header>
            {schedule.slots && (
              <Accordion.Body>
                {schedule.slots?.map((slot) => (
                  <div className="classScheduleItem" key={slot.time}>
                    <div className="classScheduleItemTime">{slot.time}</div>
                    {slot.title && (
                      <div className="lectureTitle">{slot.title}</div>
                    )}
                    {slot.teamNumber && <TeamScheduleItem slot={slot} />}
                    {slot.link && (
                      <div className="lectureNotesLink">
                        <a href={slot.link.url}>{slot.link.title}</a>
                      </div>
                    )}
                  </div>
                ))}
              </Accordion.Body>
            )}
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
};

export default Home;
