import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

const TeamsInformation = ({
  team1Name,
  team2Name,
  team3Name,
  baseGithubUrl,
}) => {
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
          <div>Member 5 - Engineer</div>
          <div>Member 6 - Engineer</div>
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
          <div>Member 5 - Engineer</div>
          <div>Member 6 - Engineer</div>
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
          <div>Member 5 - Engineer</div>
          <div>Member 6 - Engineer</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default TeamsInformation;

TeamsInformation.propTypes = {
  team1Name: PropTypes.string,
  team2Name: PropTypes.string,
  team3Name: PropTypes.string,
  baseGithubUrl: PropTypes.string,
};
