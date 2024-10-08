import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [recording, setRecording] = useState(null); // 保存 recording 對象

  const startRecording = async () => {
    try {
      // 請求音頻權限
      await Audio.requestPermissionsAsync();

      // 檢查是否已有錄音，避免重複
      if (recording) {
        console.warn('Already recording!');
        return;
      }

      // 創建錄音實例並開始錄音
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording); // 保存 recording 對象到狀態
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      // 檢查是否有錄音
      if (!recording) {
        console.warn('No recording found to stop.');
        return;
      }

      // 停止並卸載錄音
      await recording.stopAndUnloadAsync();
      console.log('Recording stopped');
      
      // 重設錄音狀態
      setRecording(null);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  return (
    <View>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
    </View>
  );
}
