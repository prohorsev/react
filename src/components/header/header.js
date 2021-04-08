import React, { Component } from "react"
import styles from "./header.module.css"
import { Link } from "react-router-dom"

export class Header extends Component {
  render() {
    return (
        <div className={styles.header}>header
          <Link to={`/profile`}>profile</Link>
        </div>
    )
  }
}
