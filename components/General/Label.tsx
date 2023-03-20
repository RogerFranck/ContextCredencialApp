import React from "react";
import { Text, View } from "react-native";

interface Props {
  tittle: string;
  description: string;
}

export default function Label({ tittle, description }: Props) {
  return (
    <View
      style={{
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        {tittle}
      </Text>
      <Text> {description} </Text>
    </View>
  );
}
