
import { BasicBlock } from "@/components/BasicBlock";
import { BasicOBlock } from "@/components/BasicOBlock";

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <BasicBlock >
        <Text>BasicBlock</Text>
      </BasicBlock>

      <Text>Text Block Here</Text>
      <Link href="/user">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/setting">Setting</Link>
      <Link href="/modal" style={styles.link}>
        Open model
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
