import React, { useEffect, useState } from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import axios from "axios";

const UserScreen = (props) => {
  const id = props.route.params.id;
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userCompany, setUserCompany] = useState([]);

  getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setUser(response.data);
        setUserAddress(response.data.address);
        setUserCompany(response.data.company);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  
  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.infoArea}>
        <View style={styles.personalArea}>
          <Text style={styles.personal}>Personal Informations:</Text>
          <Text><Text style={styles.title}>Name:</Text>{user.name}</Text>
          <Text><Text style={styles.title}>Username:</Text>{user.username}</Text>
          <Text><Text style={styles.title}>Email :</Text>{user.email}</Text>
        </View>

        <View style={styles.addressArea}>
          <Text style={styles.address}>Address Informations:</Text>
          <Text><Text style={styles.title}>Street:</Text>  {userAddress.street}</Text>
          <Text><Text style={styles.title}>Suite:</Text>{userAddress.suite}</Text>
          <Text><Text style={styles.title}>City:</Text>{userAddress.city}</Text>
          <Text><Text style={styles.title}>Zipcode:</Text>{userAddress.zipcode}</Text>
          <Text><Text style={styles.title}>Phone:</Text>{user.phone}</Text>
        </View>
        <View style={styles.businessArea}>
          <Text style={styles.business}>Business Informations:</Text>
          <Text><Text style={styles.title}>Website:</Text>{user.website}</Text>
          <Text><Text style={styles.title}>Company:</Text>{userCompany.name}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },
  infoArea: {
    width: "95%",
    padding: 10,
  },
  addressArea: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  personalArea: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  personal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  businessArea: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  business: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  title:{
    color: "green",
  }
});
export default UserScreen;
