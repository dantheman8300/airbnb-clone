import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";


function Page() {

  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);

  return (
    <View>
      <Text>Listing</Text>
    </View>
  )
}

export default Page;