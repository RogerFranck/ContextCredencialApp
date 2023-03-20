import React from "react";
import { View } from "react-native";
import Form from "../components/Form";
import EmployeeCard from "../components/EmployeeCard";

export default function Home() {
  return (
    <View>
      <Form />
      <EmployeeCard />
    </View>
  );
}
