import React from 'react';

const PrivateMessage = ({ privateMessage, setPrivateMessages }) => {

    const sendPrivateMessage = () => {
        setPrivateMessages(null)
    }

    return (
        <div className="private-message">
            <div className="private-message__body">
                <h3>Private Message To: {privateMessage}</h3>
                <textarea rows="5" placeholder="Send a message ...." type="textarea" />
                <button onClick={sendPrivateMessage}>Send</button>
            </div>
        </div>
    );
};

export default PrivateMessage;