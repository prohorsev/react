import "./index.css"
//import styles from "./index.module.css"
import logo from "./test.png"
import React from "react"
import ReactDom from "react-dom"

console.log(logo)
const messages = ["Hello"]

const Messages = () => {
  return (
    <div>
      <h1>messages</h1>
      {messages.map((message) => (
        <p key={messages}>{message}</p>
      ))}
      <input placeholder="Введите сообщение" />
      <button>Отправить</button>
    </div>
  )
}

ReactDom.render(
  <>
    <Messages title="title" />
  </>,
  document.querySelector("#root"),
)
