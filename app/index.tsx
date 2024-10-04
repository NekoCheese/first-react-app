import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Here is Root</Text>
      <Link href="/home/">Home</Link>
      <Link href="/about/">About</Link>
    </View>
  );
}
