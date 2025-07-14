import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const PasswordItem: React.FC<{
  data: string;
  removePassword: () => void;
}> = ({ data, removePassword }) => {
  return (
    <Pressable
      onLongPress={removePassword}
      style={[styles.itemContainer, { width: "100%", marginTop: 10 }]}
    >
      <Text style={styles.textPassword}>{data}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#0E0E0E",
    borderRadius: 8,
    padding: 14,
  },
  textPassword: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "semibold",
  },
});
