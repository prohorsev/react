import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    state = {
        messages: [
            { author: "User", value: "Привет!" },
            { author: "Robot", value: "Я робот!" }
            ]
    };

    handleClick = () => {
        const { messages } = this.state
        this.setState({ messages: [...messages, { author: "User", value: "Нормально" }] });
    };

    componentDidUpdate() {
        const { messages } = this.state
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                    this.setState(
            { messages: [...messages, { author: "Robot", value: "Не приставай ко мне, я робот!" }] }),
                1000);
        }
    }



    render() {
        const { messages } = this.state

        return <div>
            {messages.map((message, index) => (
                <Message message={message} key={index} />
            ))}
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}
