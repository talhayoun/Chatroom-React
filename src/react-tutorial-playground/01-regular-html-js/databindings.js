import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/styles.scss";
import "./react-tutorial-playground/databinding.scss"
import { nanoid } from "nanoid";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

let title = "React";
let subTitle = "learning in fun and pleasure";
let titleClass = "headline";
let divMouseX = 0;
let divMouseY = 0;
let divMouseClass = "square"
let isDivClicked = false;
let isCircleDiv = true;
let isEmailValid = true;
let messages = [];
let inputString = "";
let isInputEmpty = true;
let board =
    ["B", "W", "B", "W", "B", "W", "B", "W",
        "W", "B", "W", "B", "W", "B", "W", "B",
        "B", "W", "B", "W", "B", "W", "B", "W",
        "W", "B", "W", "B", "W", "B", "W", "B",
        "B", "W", "B", "W", "B", "W", "B", "W",
        "W", "B", "W", "B", "W", "B", "W", "B",
        "B", "W", "B", "W", "B", "W", "B", "W",
        "W", "B", "W", "B", "W", "B", "W", "B",]

const checkInputLength = (event) => {
    inputString = event.target.value;
    if (inputString.length === 0) {
        isInputEmpty = true;
        renderUI();
        return;
    }
    isInputEmpty = false;
    renderUI()
}

const checkEmail = (event) => {
    console.log(event)
    let currentV = event.target.value;
    if (currentV.length === 0) {
        isEmailValid = true;
        event.target.className = "";
        renderUI()
        return;
    }
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(currentV)) {
        console.log("invalid")
        isEmailValid = false;
        event.target.className = "input-border";
        renderUI()
        return;
    }
    isEmailValid = true;
    event.target.className = "";
    renderUI()
}

const onDivClick = (event) => {
    console.log(isDivClicked)
    isDivClicked = !isDivClicked;
    renderUI()
}

const onInputInputChangeTitle = (event) => {
    const newTitle = event.target.value.trim();
    if (newTitle.length === 0) {
        title = "React";
        renderUI();
        return;
    }
    title = newTitle;
    console.log(newTitle);
    renderUI();
};

const onMouseoverDivMouse = (event) => {
    divMouseX = event.nativeEvent.offsetX;
    divMouseY = event.nativeEvent.offsetY;
    console.log(event)
    if (divMouseX > 150 && divMouseY > 150) {
        divMouseClass = "square blue"
    }
    if (divMouseX > 150 && divMouseY < 151) {
        divMouseClass = "square yellow"
    }
    if (divMouseX < 150 && divMouseY > 150) {
        divMouseClass = "square red"
    }
    if (divMouseX < 151 && divMouseY < 151) {
        divMouseClass = "square green"
    }
    renderUI()
}

const onChangeCircleDiv = (event) => {
    isCircleDiv = event.target.value === "circle" ? true : false;
    renderUI()
}

const onSubmitMessages = (event) => {
    event.preventDefault();
    console.log(event)
    let message = event.target.children[0].value.trim();
    let id = nanoid();
    console.log(id)
    messages.push({ message, id });
    event.target.children[0].value = "";
    isInputEmpty = true;
    renderUI();
}

const removeMessage = (index) => {
    messages.splice(index, 1);
    renderUI();
}

function renderUI() {
    const jsx = (
        <div>
            <h1 className={titleClass}>{title}</h1>
            <h2>{subTitle}</h2>
            <input placeholder="Change title" onInput={onInputInputChangeTitle}></input>
            <div className={divMouseClass} onMouseMove={onMouseoverDivMouse}>
                x: {divMouseX}; y: {divMouseY}
            </div>
            <button onClick={() => { onDivClick() }}>{isDivClicked ? "Remove" : "Show"}</button>
            {isDivClicked && <div className="div-show">Showing</div>}
            <select onChange={onChangeCircleDiv}>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
            </select>
            {isCircleDiv ? <div className="circle"></div> : <div className="squaree"></div>}
            <input placeholder="email" type="text" onChange={checkEmail}></input>
            {!isEmailValid && <div>Invalid email</div>}
            <form onSubmit={onSubmitMessages}>
                <input onInput={checkInputLength} placeholder="message"></input>
                <button disabled={isInputEmpty}>Submit</button>
            </form>
            {messages.length === 0 ? (<div>No messages</div>) : (messages.map((message, i) => (<div className={i % 2 === 0 ? "blue" : "yellow"} key={message.id}><div>{message.message}</div><button onClick={() => { removeMessage(i) }}>Remove</button></div>)))}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById("root"))
}

renderUI();