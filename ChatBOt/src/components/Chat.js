import React from "react";
import { Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

class Chat extends React.Component {
  state = {
    messages: []
  };
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={message => {
          //sends the messages to the backend
        }}
        user={{
          _id: 1
        }}
      />
    );
  }
}

<View>
  <Text>Hello {this.props.name}!</Text>
</View>;
//   }
// }

Chat.defaultProps = {
  name: "John"
};
Chat.propTypes = {
  name: React.ProptTypes.string
};

export default Chat;
