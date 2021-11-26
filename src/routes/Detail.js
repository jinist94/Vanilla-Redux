import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  console.log(toDos);
  return <h1>tt</h1>;
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps.match);
  return { toDos: state };
}
export default connect(mapStateToProps)(Detail);
