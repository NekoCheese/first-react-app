import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // 這是頁面的名稱，必須與根目錄中的 url 匹配
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
      </Drawer>
    </GestureHandlerRootView>
  );
}
