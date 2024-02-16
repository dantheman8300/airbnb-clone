import { Text, View } from "react-native";
import React, { useEffect } from "react";

interface Props {
  listings: any[];
  category: string;
}

export default function Listings(
  { listings, category }: Props
) {

  useEffect(() => {
    console.log("Listings category changed: ", category);
  }, [category])

  return (
    <View>
      <Text>Listings</Text>
    </View>
  )
}