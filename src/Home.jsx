import { useCallback, useMemo, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import TeamScheduleItem from "./TeamScheduleItem";
import TeamsInformation from "./TeamsInformation";

import "./Home.css";

const baseGithubUrl =
  "https://github.com/spazard1/softwareprocess2025/raw/refs/heads/main/files/";

const team1Name = "In Decent Exposure";
const team2Name = "Robot Rally";
const team3Name = "Royal Rangers";

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

  const getStandardSchedule = useCallback(
    (lectureInfo) => {
      return [
        getTeam(1),
        getTeam(2),
        { ...lectureInfo, time: thirdSlot },
        getTeam(3),
      ];
    },
    [getTeam]
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
            link: baseGithubUrl + "2 estimation.pptx",
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
        slots: getStandardSchedule({
          title: "Sprint Transitions",
          link: baseGithubUrl + "3 sprint transitions.pptx",
        }),
      },
      {
        date: "February 25",
        tags: [{ type: "sprintSchedule", title: "Sprint 1" }],
        slots: getStandardSchedule({
          title: "Product Managers",
          link: baseGithubUrl + "4 product managers.pptx",
        }),
      },
      {
        date: "March 4",
        tags: [
          { type: "scheduleAlert", title: "No Class" },
          { type: "sprintSchedule", title: "Sprint 1" },
          { type: "sprintSchedule", title: "Sprint 2 Pre-Planning" },
        ],
        slots: [
          {
            title: "Performance Reviews",
            link: baseGithubUrl + "5 performance reviews.pptx",
          },
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
        slots: getStandardSchedule({
          title: "Git",
          link: baseGithubUrl + "6 git.pptx",
        }),
      },
      {
        date: "March 25",
        tags: [{ type: "sprintSchedule", title: "Sprint 2" }],
        slots: getStandardSchedule({
          title: "Five Dysfunctions of a Team",
          links: [
            baseGithubUrl + "7 five dysfunctions.pptx",
            {
              url: baseGithubUrl + "five dysfunctions questionare.pptx",
              title: "Questionare",
            },
          ],
        }),
      },
      {
        date: "April 1",
        tags: [
          { type: "sprintSchedule", title: "Sprint 2" },
          { type: "sprintSchedule", title: "Sprint 3 Pre-Planning" },
        ],

        slots: getStandardSchedule({
          title: "How to ship software without a PM",
          link: baseGithubUrl + "8 how to ship software without a pm.pptx",
        }),
      },
      {
        date: "April 8",
        tags: [{ type: "sprintSchedule", title: "Sprint 3 Planning" }],
        slots: getStandardSchedule({
          title: "Followers, Leaders, and Power",
          link: baseGithubUrl + "9 followers, leaders, and power.pptx",
        }),
      },
      {
        date: "April 15",
        tags: [{ type: "sprintSchedule", title: "Sprint 3" }],
        slots: getStandardSchedule({
          title: "The Coaching Habit",
          link: baseGithubUrl + "10 the coaching habit.pptx",
        }),
      },
      {
        date: "April 22",
        tags: [
          { type: "sprintSchedule", title: "Sprint 3" },
          { type: "sprintSchedule", title: "Sprint 4 Pre-Planning" },
        ],
        slots: getStandardSchedule({
          title: "Resumes, Jobs, and Money",
          link: baseGithubUrl + "11 resumes, jobs, and money.pptx",
        }),
      },
      {
        date: "April 29",
        tags: [{ type: "sprintSchedule", title: "Sprint 4 Planning" }],
        slots: getStandardSchedule({
          title: "Guests and ???",
        }),
      },
      {
        date: "May 6",
        tags: [{ type: "sprintSchedule", title: "Sprint 4" }],
        slots: getStandardSchedule({
          title: "Software Engineering Levels",
          link: baseGithubUrl + "12 software engineering levels.pptx",
        }),
      },
      {
        date: "May 13",
        tags: [{ type: "sprintSchedule", title: "Sprint 4" }],
        slots: getStandardSchedule({
          title: "How to Interview Candidates",
          link: baseGithubUrl + "13 how to interview candidates.pptx",
        }),
      },
      {
        date: "May 20",
        tags: [{ type: "scheduleAlert", title: "Final Presentations" }],
        slots: [
          {
            title:
              "All students are expected to attend all presentations. Each presentation will be 45 to 60 minutes.",
          },
          { ...getTeam(1), time: "1." },
          { ...getTeam(2), time: "2." },
          { ...getTeam(3), time: "3." },
        ],
      },
    ],
    [getStandardSchedule, getTeam]
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
                        <a
                          href={
                            typeof slot.link === "string"
                              ? slot.link
                              : slot.link.url
                          }
                        >
                          {slot.link.title ? slot.link.title : "Slides"}
                        </a>
                      </div>
                    )}
                    {slot.links?.map((link) => (
                      <div key={link} className="lectureNotesLink">
                        <a href={typeof link === "string" ? link : link.url}>
                          {link.title ? link.title : "Slides"}
                        </a>
                      </div>
                    ))}
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
