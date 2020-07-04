import "./styles/_base.scss";
import React from "react";

import LeftNav from "./components/leftnav";
import Main from "./components/main";

function App() {
  return (
    <React.Fragment>
      <LeftNav />
      <Main />
    </React.Fragment>
  );
}

export default App;
