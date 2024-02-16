import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

function Page() {
  return (
    <View>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/bookings">Bookings</Link>
      <Link href="/listing/123">Listing details</Link>
    </View>
  );
}

export default Page;
