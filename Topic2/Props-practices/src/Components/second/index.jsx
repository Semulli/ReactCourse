import Third from "../third";
import Title from "../title";
import PropTypes from "prop-types";

function Second(props) {
  const { email, phoneNumber, married, hobbies } = props.personInfo;
  return (
    <>
      <div className="parent child">
        <Title color="red" variant="title2">
          this is the second component
        </Title>
        <h2>email: {email}</h2>
        <h2>number: {phoneNumber}</h2>
        <Third  married={married} hobbies={hobbies} />
      </div>
    </>
  );
}

export default Second;

Second.propTypes = {
  personInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    married: PropTypes.bool.isRequired,
    hobbies: PropTypes.array.isRequired,
  }).isRequired,
};
