import React, { useEffect, useState } from "react";
import userImage from "../../assets/images/user-icon.png";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
const Users = (props) => {
  const [users, setUsers] = useState([]);
  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("User Detail", {
                id: item.id,
              })
            }
          >
            <View style={styles.area}>
              <View style={styles.container}>
                <Image style={styles.image} source={userImage}></Image>
                <Text style={styles.user}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10,
    width: "95%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  user: {
    color: "green",
  },
  image: {
    width: 50,
    height: 50,
  },
});
export default Users;
