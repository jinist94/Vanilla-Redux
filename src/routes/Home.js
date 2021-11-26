import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import ToDo from "../components/ToDo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    // dispatch(addTodo(text)); 이거였는데 아래로 바꿈
    addTodo(text);
    setText("");
  }
  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} /> // todo엔 text: ~~, id: ~~ 가 되어있기 때문에 저렇게 spread문법으로 생략가능
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  }; //여기에 function을 만든 것임. 이 함수가 실행되면 text를 받아서 store에 있는 addTodo를 실행함 == dispatch({type:ADD, text:~~})를 꼬아서 놓은것 ㅋㅋ
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
