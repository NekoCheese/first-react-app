import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Animated } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioVisualizer() {
  const [sound, setSound] = useState(null);
  const [barHeight, setBarHeight] = useState(new Animated.Value(10)); // 初始音量條高度
  const [playbackStatus, setPlaybackStatus] = useState(null);

  // 播放音頻
  async function playSound() {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/12Mornings.mp3'), // 替換為你的音頻文件
        {
          isLooping: true, // 音頻循環播放
          shouldPlay: true, // 加載後立即播放
        },
        onPlaybackStatusUpdate
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound', error);
    }
  }

  // 停止播放
  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      setSound(null);
    }
  }

  // 播放狀態更新函數，用於檢測播放過程中的數據
  const onPlaybackStatusUpdate = (status) => {
    setPlaybackStatus(status); // 保存當前播放狀態

    if (status.isPlaying) {
      // 使用播放進度來模擬音量變化
      const volumeLevel = Math.abs(Math.sin(status.positionMillis / 500)); // 模擬一個動態音量變化
      Animated.timing(barHeight, {
        toValue: Math.max(volumeLevel * 100, 10), // 將模擬音量變化應用於條形圖高度
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
      {playbackStatus && (
        <Text>Current Position: {Math.round(playbackStatus.positionMillis / 1000)}s</Text>
      )}

      {/* 可視化的音量條 */}
      <Animated.View style={[styles.volumeBar, { height: barHeight }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  volumeBar: {
    width: 50,
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 10,
  },
});
