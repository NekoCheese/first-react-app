import { View, type ViewProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function BasicOBlock({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    const defaultStyle = styles.default;

    return (
        <View style={[{ backgroundColor }, defaultStyle, style]} {...otherProps} />
    );
}

const styles = StyleSheet.create({
    default: {
        padding: 5,          // 預設內邊距
        borderRadius: 50,      // 預設圓角
        borderWidth: 1,       // 預設邊框寬度
        borderColor: '#000',  // 預設邊框顏色
    },
});