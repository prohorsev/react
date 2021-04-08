import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component {
    render() {
        const {
            message: { message, author, createdTs },
        } = this.props

        return (
            <div
                className={classNames(styles.message, {
                    [styles.currentMessage]: author === "User",
                })}
            >
                <p>{author}</p>
                <h3>{message}</h3>
                <p>{format(createdTs, "HH:mm:ss")}</p>
            </div>
        )
    }
}
