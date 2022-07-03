import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import user from "../../assets/images/user-icon.png";

const PostScreen = (props) => {
  const id = props.route.params.id;
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  getPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  getComments = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getPost();
    getComments();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.area}>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postBody}>{post.body}</Text>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.comments}>Comments</Text>
            <View style={styles.line2}></View>
            {comments.map((comment, index) => (
              <View key={index}>
                <View style={styles.userInfo}>
                  <Image style={styles.icon} source={user}></Image>
                  <Text style={styles.name}>{comment.name}</Text>
                </View>
                <Text style={styles.email}>{comment.email}</Text>
                <Text style={styles.body}>{comment.body}</Text>
                <View style={styles.line2}></View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  area: {
    borderWidth: 1,
    width: "95%",
    borderRadius: 10,
    padding: 10,
    color: "green",
  },
  postTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  postBody: {
    fontSize: 18,
  },
  line: {
    width: "100%",
    color: "black",
    borderWidth: 1,
  },
  line2: {
    width: "100%",
    color: "black",
    borderWidth: 0.5,
  },
  comments: {
    color: "green",
    fontSize: 12,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  userInfo:{
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  name: {
    color: "green"
  },
  email:{
    marginLeft: 20,
    color: "green",
  },
  body:{
    marginLeft: 20,
    marginTop: 10,
    marginBottom:10,
  }
});
export default PostScreen;
