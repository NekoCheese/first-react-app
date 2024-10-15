import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';


export function VoiceBar(){
    const [volume, setVolume] = useState(1.0); // 設置初始音量為 1.0 (100%)
  
    const increaseVolume = async () => {
      const newVolume = Math.min(volume + 0.1, 1.0);  // 最大值為 1.0
      setVolume(newVolume);
    };
  
    const decreaseVolume = async () => {
      const newVolume = Math.max(volume - 0.1, 0.0);  // 最小值為 0.0
      setVolume(newVolume);
    };
  
    return (
      <View>
        <Button title="增加音量" onPress={increaseVolume} />
        <Button title="減少音量" onPress={decreaseVolume} />
        <Text>當前音量：{Math.round(volume * 100)}%</Text>
      </View>
    );
  };
  
