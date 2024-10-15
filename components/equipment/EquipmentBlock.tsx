// 匯入必要的模組
import { StyleSheet } from 'react-native';
import { ThemedView, ThemedViewProps } from '../ThemedView';

export function EquipmentBlock({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  return (
    <ThemedView style={[styles.equipmentContainer]} lightColor='#A3A3A3' darkColor=''>
      {otherProps.children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  equipmentContainer: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '100%',
    maxHeight: '15%',
    margin: 4,
    borderColor: '#3D3D3D',
    borderRadius: 5,
    borderWidth: 1,
  },
});