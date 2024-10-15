
import { EquipmentBlock } from "@/components/equipment/EquipmentBlock";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, View } from "react-native";

const AddNewEquipment = () => {
  return (
    <>
      <ThemedView>
        <ThemedText type='subtitle'>+</ThemedText>
      </ThemedView>
    </>
  )
}

export default function Index() {
  return (
    <ThemedView style={styles.equipmentContainer} darkColor="#3D3D3D">

      <EquipmentBlock>
        <ThemedView style={styles.imageContainer}>
          <Image source={require('@/assets/images/react-logo.png')} />
        </ThemedView>

        <ThemedView>
        </ThemedView>
      </EquipmentBlock>




      <AddNewEquipment />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  equipmentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 8,
  },
  imageContainer: {
    margin: 4,
  },
});