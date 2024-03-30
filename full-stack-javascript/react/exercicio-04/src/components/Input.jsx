import PropTypes from "prop-types";

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func,
};

function Input({ passwordSize, setPasswordSize }) {
  return (
    <input
      type="number"
      id="passwordSize"
      min={5}
      value={passwordSize}
      onChange={(e) => setPasswordSize(Number(e.target.value))}
    />
  );
}

export default Input;
