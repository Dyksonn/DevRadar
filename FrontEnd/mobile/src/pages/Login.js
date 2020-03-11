import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default function Login() {
  const senhaRef = useRef();
  return (
    <KeyboardAvoidingView style={s.container}>
      <TextInput
        style={s.input}
        placeholder="E-mail"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => senhaRef.current.focus()}
      />
      <TextInput
        style={s.input}
        placeholder="Password"
        secureTextEntry
        ref={senhaRef}
      />
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    fontStyle: "italic",
    borderRadius: 7,
    padding: 10
  }
});
