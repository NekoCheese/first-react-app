// 匯入必要的模組
import { View, type ViewProps, StyleSheet } from 'react-native'; // 引入 StyleSheet 用來定義樣式

import { useThemeColor } from '@/hooks/useThemeColor'; // 匯入自定義 Hook，根據主題顏色返回適當的顏色

// 定義自訂的元件屬性類型，擴展了 ViewProps，並添加 lightColor 和 darkColor 兩個額外的選擇性屬性
export type ThemedViewProps = ViewProps & {
    lightColor?: string; // 當主題是「淺色模式」時，應使用的背景顏色
    darkColor?: string;  // 當主題是「深色模式」時，應使用的背景顏色
};

// 定義 BasicOBlock 元件，使用解構賦值提取傳入的屬性
export function BasicBlock({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    // 調用 useThemeColor hook 來根據當前的主題模式選擇淺色或深色背景顏色
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    // 定義預設樣式，這裡你可以加入你想要的預設樣式設定
    const defaultStyle = styles.default;

    // 返回一個 View 元件，應用自訂的背景顏色和其他樣式
    return (
        // 使用展開運算符應用傳入的其他 props，並將 backgroundColor 和傳入的 style 合併到一個樣式對象中
        <View style={[{ backgroundColor }, defaultStyle, style]} {...otherProps} />
    );
}

// 使用 StyleSheet 創建預設樣式
const styles = StyleSheet.create({
    default: {
        padding: 5,          // 預設內邊距
        borderRadius: 5,      // 預設圓角
        borderWidth: 1,       // 預設邊框寬度
        borderColor: '#000',  // 預設邊框顏色
    },
});