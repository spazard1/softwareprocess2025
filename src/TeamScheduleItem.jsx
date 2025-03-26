import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import "./TeamScheduleItem.css";

const TeamScheduleItem = ({ team }) => {
  const overlay = (
    <div className="teamOverlay">
      {team.members.map((member) => {
        const { name: memberName, role } = member;
        return (
          <div className="member" key={memberName}>
            {memberName} - {role}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="classScheduleItem">
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={overlay}
        rootClose={true}
      >
        <div className={"teamName roundedTag team" + team.number}>
          {team.name}
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default TeamScheduleItem;

TeamScheduleItem.propTypes = {
  team: PropTypes.object,
};
