/* eslint-disable react/prop-types */

import UserInfo from "./UserInfo";

function Container({ children }) {
  return (
    <div>
      {children}
      <UserInfo />
    </div>
  );
}

export default Container;
