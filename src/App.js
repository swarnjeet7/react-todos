import React from "react";
import Header from "./components/header/header";
import Todos from "./components/todos/todos";
import Modal from "./components/modal/modal";
import { connect } from "react-redux";
import "./App.css";

function App({ modalsData }) {
  return (
    <div className="TodoApp">
      <Header />
      <main className="body">
        <Todos />
      </main>
      {modalsData.isModalOpen && <Modal />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modalsData: state.modalsData,
  };
};

export default connect(mapStateToProps, null)(App);
