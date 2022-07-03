import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
const Albums = (props) => {
  const [albums, setAlbums] = useState([]);
  getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums?_limit=20/")
      .then((response) => response.json())
      .then((json) => setAlbums(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getAlbums();
  }, []);
  return (
    <View>
      <View
        style={{ display: "flex", backgroundColor: "#fff", height: "100%" }}
      >
          <FlatList
            data={albums}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("Album Detail", {
                    id: item.id,
                  })
                }
              >
                <View style={styles.area}>
                  <View style={styles.container}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
      </View>

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
  title: {
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Albums;
