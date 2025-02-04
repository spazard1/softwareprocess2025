import PropTypes from "prop-types";

const TeamScheduleItem = ({ slot }) => {
  return (
    <div className="classScheduleItem">
      <div className={"roundedTag team" + slot?.teamNumber}>{slot?.teamName}</div>
    </div>
  );
};

export default TeamScheduleItem;

TeamScheduleItem.propTypes = {
  slot: PropTypes.object,
};
