import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component {
    static propTypes = {
        message: PropTypes.shape({
            author: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }),
    };

    render() {
        const {
            message: { value, author },
        } = this.props
        return (
            <div className="message"
                 style={ { alignSelf: this.props.message.author === 'bot' ?
                         'flex-start' : 'flex-end' } }>
                <p>{author}</p>
                <p>{value}</p>
            </div>
        )
    }
}
