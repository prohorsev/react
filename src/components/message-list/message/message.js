import classNames from "classnames"
import React, { Component } from "react"

export class Message extends Component {
    render() {
        const {
            message: { message, author },
        } = this.props

        return (
            <div
                className={classNames(styles.message, {
                    [styles.currentMessage]: author === "User",
                })}
            >
                <p>{author}</p>
                <h3>{message}</h3>
                {}
            </div>
        )
    }
}
