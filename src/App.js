import React from "react";
import { connect } from "react-redux";
import Header from "./components/header/header";
import Todos from "./components/todos/todos";
import Modal from "./components/modal/modal";
import Toast from "./components/toast/toast";
import "./App.css";

function App({ modalsData, showToast }) {
  return (
    <div className="TodoApp">
      <Header />
      <main className="body">
        <Todos />
      </main>
      {modalsData.isModalOpen && <Modal />}
      {showToast && <Toast />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modalsData: state.modalsData,
  };
};

export default connect(mapStateToProps, null)(App);
