import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, Image, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { AspectRatio } from "native-base";

const AlbumScreen = (props) => {
  const id = props.route.params.id;
  const [album, setAlbum] = useState([]);
  const [photos, setPhotos] = useState([]);
  getAlbum = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/" + id)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  getPhotos = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/albums/" +
          id +
          "/photos?_limit=20/"
      )
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getAlbum();
    getPhotos();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <Text style={styles.albumTitle}>{album.title}</Text>
          <View style={styles.line}></View>
              {photos.map((photo, index) => (
                <View
                  key={index}>
                    <View style={styles.imageArea}>
                    <AspectRatio>
                      <Image
                        source={{
                          uri: photo.url,
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                    <Text style={styles.photoTitle}>
                      {photo.title}
                    </Text>
                    </View>
                    
                    
                </View>
              ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  albumTitle: {
    color: "green",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    paddingTop: 20,
  },
  line:{
    borderColor: "green",
    width: "100%",
    borderWidth: 0.5,
  }, 
  imageArea:{
    borderWidth: 50,
    borderColor: "white",
  },
  photoTitle:{
    color: "green",
    backgroundColor: "white",
    textAlign: "center",
    fontWeight: "600",
  }
});
export default AlbumScreen;
