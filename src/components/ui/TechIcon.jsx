import PropTypes from "prop-types";

export const TechIcon = ({ name, color, Icon }) => {
  return (
    <div className="group flex flex-col items-center gap-1">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[${color}] transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_10px_${color}]`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span>{name}</span>
    </div>
  );
};

TechIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};
