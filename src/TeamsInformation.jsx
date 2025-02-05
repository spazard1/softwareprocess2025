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
          <div>Photos</div>
          <div>Kyle Melby - Scrum Master</div>
          <div>David Schieffer - PM</div>
          <div>Jenny Njogu - Engineer</div>
          <div>Ethan Neils - Engineer</div>
          <div>Luke Daenzer - Engineer</div>
          <div>Brody Bush - Engineer</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <div className={"roundedTag team2"}>{team2Name}</div>
        </Accordion.Header>
        <Accordion.Body>
          <div>Robots</div>
          <div>Clark Nelson - Scrum Master</div>
          <div>{"Murphy O'Maley - PM"}</div>
          <div>Bright Holst - Engineer</div>
          <div>Christian Poppie - Engineer</div>
          <div>Sam Neumann - Engineer</div>
          <div>Graham Johnson - Engineer</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <div className={"roundedTag team3"}>{team3Name}</div>
        </Accordion.Header>
        <Accordion.Body>
          <div>GPS Adventure</div>
          <div>Hailey DuPrée - Scrum Master</div>
          <div>David Carlson - PM</div>
          <div>Caleb Climaco - Engineer</div>
          <div>Jamille Edrial - Engineer</div>
          <div>Peyton Baker - Engineer</div>
          <div>Nicholas Pederson - Engineer</div>
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
