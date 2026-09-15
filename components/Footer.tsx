import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Cafeteria do JP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //Footer
  footer: {
    padding: 20,
    alignItems: "center",
    marginBlock: 20
  },
  footerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9B9B9B"
  }
  //Footer
})