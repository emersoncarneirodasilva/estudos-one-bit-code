import PropTypes from "prop-types";

TextInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  children: PropTypes.string,
};

function TextInput({ id, value, setValue, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}: </label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
