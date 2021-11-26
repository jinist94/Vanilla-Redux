import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../routes/store";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps.id);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  }; //ownProps를 찍어보면 해당 text와 id가 나옴
}
export default connect(null, mapDispatchToProps)(ToDo);
