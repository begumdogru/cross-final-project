import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserListScreen from "./User/users";
import UserDetailScreen from "./User/user";
import PostsListScreen from './Post/posts';
import PostDetailScreen from './Post/post';
import AlbumsListScreen from './Album/albums';
import AlbumDetailScreen from './Album/album';
import Todo from "./Todo/todo";
import TodoItem from "./Todo/todoItem";

const Users = createStackNavigator();

function UsersScreen() {
  return (
    <Users.Navigator>
      <Users.Screen name="Users List" component={UserListScreen} />
      <Users.Screen name="User Detail" component={UserDetailScreen} />
    </Users.Navigator>
  );
}


const Posts = createStackNavigator();

function PostsScreen() {
  return (
    <Posts.Navigator>
      <Posts.Screen name="Posts List" component={PostsListScreen} />
      <Posts.Screen name="Post Detail" component={PostDetailScreen} />
    </Posts.Navigator>
  );
}


const Albums = createStackNavigator();

function AlbumsScreen() {
  return (
    <Albums.Navigator>
      <Albums.Screen name="Albums List" component={AlbumsListScreen} />
      <Albums.Screen name="Album Detail" component={AlbumDetailScreen} />
    </Albums.Navigator>
  );
}

const Todos = createStackNavigator();

function TodosScreen() {
  return (
    <Todos.Navigator>
      <Todos.Screen name="Todo List" component={Todo} />
      <Todos.Screen name="Todo Detail" component={TodoItem} />
    </Todos.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return null;
          },
          tabBarStyle: {
            height: 60,
          },
          tabBarActiveTintColor: "green",
        })}
      >
        <Tab.Screen name="Users" component={UsersScreen} options={{ headerShown: false }}  />
        <Tab.Screen name="Posts" component={PostsScreen} options={{ headerShown: false }}  />
        <Tab.Screen name="Album List" component={AlbumsScreen} options={{ headerShown: false }}  />
        <Tab.Screen name="Todo List" component={TodosScreen} options={{ headerShown: false }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
