import React, { Component } from "react";
import {
  Text,
  View,
  Button,
} from "react-native";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
  }

  onItemClick() {
    this.setState(function (prev) {
      return {
        completed: !prev.completed,
      };
    });
  }

  render() {
    const styleSheet = {
      todoItemContainer: {
        padding: 20,
        margin: 15,
        backgroundColor: this.state.completed ? "green" : "darkred",
      },
    };

    return (
      <View style={styleSheet.todoItemContainer}>
        <Text>{this.props.todo}</Text>
        <Text>Completed: {this.state.completed.toString()}</Text>
        <Button
          onPress={this.onItemClick.bind(this)}
          title="Change Status"
          color="#ffffff"
          accessibilityLabel="This button changes the status"
        />
      </View>
    );
  }
}
