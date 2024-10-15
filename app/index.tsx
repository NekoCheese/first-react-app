import { Clock } from "@/components/Clock";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [curr, setCurr] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Clock>
        <Text style={styles.timeText}>{formatTime(curr)}</Text>
      </Clock>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});
