import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index" // 可以在此目錄配置路由 資料夾名稱 <-> name
            options={{
              drawerLabel: '首頁',
              title: '首頁title',
            }}
          />
          <Drawer.Screen
            name="about"
            options={{
              drawerLabel: '關於',
              title: '關於title',
            }}
          />
          <Drawer.Screen
            name="equipment"
            options={{
              drawerLabel: '裝備',
              title: 'test',
            }}
          />
          <Drawer.Screen
            name="setting"
            options={{
              drawerLabel: '設定',
              title: '設定title',
            }}
          />
          <Drawer.Screen
            name="user"
            options={{
              drawerLabel: '個人',
              title: '個人title',
            }}
          />
          <Drawer.Screen
            name="modal"
            options={{
              drawerLabel: 'modalllll',
              title: '設定title',
            }}
          />
          <Drawer.Screen
            name="audio"
            options={{
              drawerLabel: '音訊',
              title: '音訊Page',
            }}
          />
          <Drawer.Screen
            name="agora"
            options={{
              drawerLabel: 'Agora',
              title: '先把基礎打好再來玩看看',
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
