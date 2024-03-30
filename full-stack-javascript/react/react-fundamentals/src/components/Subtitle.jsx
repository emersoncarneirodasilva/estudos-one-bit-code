import Sum from "./Sum";

/* eslint-disable react/no-unescaped-entities */
function Subtitle() {
  return (
    <h2 style={{ textShadow: "2px 3px 5px #000" }}>
      It's easy, like 1 + 1 is {Sum(1, 1)}
    </h2>
  );
}

export default Subtitle;
