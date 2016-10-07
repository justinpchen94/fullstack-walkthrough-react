import React from 'react';
import $ from 'jquery';

class myComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages : []
    };
    this.getMessages = this.getMessages.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.addMessage = this.addMessage.bind(this);
  }

  componentWillMount() {
    this.updateMessages();
  }

  getMessages() {

    return $.ajax({
      url: '/api/messages',
      type: "GET",
      dataType: "json",
      success: function (data) {
        console.log("data is", data.messages.map(v=>v.message))
        return data.messages.map(v=>v.message);
      },
      error: function(err) {
        console.log(err);
        return err;
      }
    });
  }

  updateMessages() {
    let self = this;

    this.getMessages()
    .done(function(data) {
      console.log(data.messages)
      self.setState({
        messages: data.messages,
      });
    });

  }

  addMessage() {
    let message = this.refs.message.value;

    console.log("sending this message", message)
    return $.ajax({
      url: '/api/messages',
      type: "POST",
      dataType: "json",
      data: {message:message},
      success: function (data) {
        this.updateMessages
      },
      error: function(err) {
        console.log(err);
        return err;
      }
    });
  }
  render() {
    const messages = this.state.messages.map(
        (msg,i) => <div key={i} >{msg.message}</div>
      )

    return (
      <div>
        <form onSubmit={this.addMessage}>
          <input type="text" placeholder="What's your message" ref="message"/>
          <button className="button" type="submit">Submit</button>
        </form>

        Messages:
        {messages}

      </div>
    );
  }

}

export default myComponent;