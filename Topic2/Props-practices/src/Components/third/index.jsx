import Title from "../title";
import PropTypes from "prop-types";
function Third(props) {
  const { married, hobbies } = props;

  const isMarried = married ? "married" : "single";

  return (
    <>
      <div className="parent last">
        <Title color="green" variant="body1">
          this is the third component
          <h3>Hobbies:</h3>
          {hobbies.map((el, index) => {
            return (
              <div key={index}>
                <h3>{el}</h3>
              </div>
            );
          })}
          <h4>family status: {isMarried}</h4>
        </Title>
      </div>
    </>
  );
}

export default Third;

Third.propTypes = {
  married: PropTypes.bool.isRequired,
  hobbies: PropTypes.array.isRequired,
};
