import React from "react";
import { connect } from "react-redux";
import Header from "./components/header/header";
import Todos from "./components/todos/todos";
import Modal from "./components/modal/modal";
import Toast from "./components/toast/toast";
import "./App.css";

function App({ modalsData, toastsData }) {
  return (
    <div className="TodoApp">
      <Header />
      <main className="body">
        <Todos />
      </main>
      {modalsData.isModalOpen && <Modal />}
      {toastsData.showToast && <Toast delay={5000} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modalsData: state.modalsData,
    toastsData: state.toastsData,
  };
};

export default connect(mapStateToProps, null)(App);
