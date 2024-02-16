import { Button, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";


function Page() {
  
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="Log Out" onPress={() => signOut()} />
      {
        !isSignedIn && 
        <Link href='/(modals)/login'>
          <Text>Login</Text>
        </Link>
      }
    </View>
  )
}

export default Page;