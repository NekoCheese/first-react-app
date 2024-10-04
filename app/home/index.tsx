import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Slot } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Page</Text>
      <Link href="/">go Root</Link>
      <Slot />
    </View>
  );
}
