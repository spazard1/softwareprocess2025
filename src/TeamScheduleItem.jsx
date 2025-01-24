import PropTypes from "prop-types";

const TeamScheduleItem = ({ scheduleTime, team }) => {
  return (
    <div className="classScheduleItem">
      <div className="classScheduleItemTime">{scheduleTime}</div>
      <div className={"team" + team.number}>{team.name}</div>
    </div>
  );
};

export default TeamScheduleItem;

TeamScheduleItem.propTypes = {
  scheduleTime: PropTypes.string,
  team: PropTypes.object,
};
