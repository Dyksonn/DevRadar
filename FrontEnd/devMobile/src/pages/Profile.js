import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

function Profile({ route }) {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${route.params?.github_username}` }}
    />
  );
}

export default Profile;
