import React from "react";
import Page from "./Page";
import { ModalContainer } from "react-modal-global/dist";

import Modal from "./Modal";

function App() {
  return (
    <>
      <Page />
      <ModalContainer controller={Modal} />
    </>
  );
}

export default App;
