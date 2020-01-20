import {Modal} from "@rtkwlf/ui";
import {Field, Formik, withFormik} from "formik";
import React from 'react';
import './App.css';
import logo from './logo.svg';

const noOp = () => {};

const InnerModal = () => {
  return (
    <Modal visible footer="some footer" onCancel={noOp} onOk={noOp}>
      <form>
        <Field name={"input1"}/>
        <Field name={"input2"}/>
      </form>
    </Modal>
  );
};

// eslint-disable-next-line no-unused-vars
const ModalForm = () => {
  return (
    <Formik initialValues={{input1: "hi", input2: "hey"}} onSubmit={noOp}>
      <Modal visible footer="some footer" onCancel={noOp} onOk={noOp}>
        <form>
          <Field name={"input1"}/>
          <Field name={"input2"}/>
        </form>
      </Modal>
    </Formik>
  )
};

const ModalFormHOC = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({input1: "hi", input2: "hey"}),
  handleSubmit: noOp // handled by modal buttons
})(InnerModal);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/*<ModalFormHOC/>*/}
      <ModalForm/>
    </div>
  );
}

export default App;
