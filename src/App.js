import React from "react";
import "./styles/_base.scss";

import LeftNav from "./components/leftnav";
import Main from "./components/main";

function App() {
  return (
    <React.Fragment>
      <LeftNav></LeftNav>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
