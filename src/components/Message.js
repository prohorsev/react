import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
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
            <div>
                <p>{author}</p>
                <p>{value}</p>
            </div>
        )
    }
}
