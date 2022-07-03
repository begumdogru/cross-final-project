import React, { Component } from "react";
import TodoItem from "./todoItem";
import { View} from "react-native";
import { ScrollView } from "native-base";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }



  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          list: res.map(function (item) {
            return item.title;
          }),
        });
      });
  }

  render() {
    return (
      <ScrollView>
        <View>
          {this.state.list.map(function (todo, i) {
            return <TodoItem todo={todo} key={i} />;
          })}
        </View>
      </ScrollView>
    );
  }
}

export default TodoList;
