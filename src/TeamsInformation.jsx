import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

const TeamsInformation = ({ teams, baseGithubUrl }) => {
  return (
    <Accordion className="teamsInformation" data-bs-theme="dark">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Links</Accordion.Header>
        <Accordion.Body>
          <div className="importantLinksContainer">
            <a href={baseGithubUrl + "COS420 Syllabus 2025.docx"}>Syllabus</a>
            <a href="https://moodle.bethel.edu/course/view.php?id=107396">
              Moodle
            </a>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      {teams.map((team) => {
        const { number, name, members } = team;

        return (
          <Accordion.Item eventKey={number} key={number}>
            <Accordion.Header>
              <div className={"roundedTag team" + number}>{name}</div>
            </Accordion.Header>
            <Accordion.Body>
              {members.map((member) => {
                const { name: memberName, role } = member;
                return (
                  <div key={memberName}>
                    {memberName} - {role}
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default TeamsInformation;

TeamsInformation.propTypes = {
  teams: PropTypes.array,
  baseGithubUrl: PropTypes.string,
};
