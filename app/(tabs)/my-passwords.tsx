import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useStorage } from "@/hooks/useStorage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import { PasswordItem } from "@/components/PasswordItem";

export default function MyPasswords() {
  const { getItems, removeItem } = useStorage();
  const [listPasswords, setListPasswords] = useState<string[]>([]);
  const focused = useIsFocused();

  const handleDeletePassword = async (item: string) => {
    const passwords = await removeItem("@password", item);

    console.log(passwords, item);

    if (passwords) {
      alert("Senha removida com sucesso!");
      setListPasswords(passwords);
    }
  };

  useEffect(() => {
    const loadPasswords = async () => {
      const passwords = await getItems("@password");

      if (passwords) {
        setListPasswords(passwords);
      } else {
        setListPasswords([]);
      }
    };

    loadPasswords();
  }, [focused]);

  return (
    <SafeAreaView style={{ flex: 1, pointerEvents: "none", boxShadow: "none" }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>
      <View style={styles.containerPasswords}>
        <FlatList
          style={{ flex: 1, pointerEvents: "auto" }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomEndRadius: 8,
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
  containerPasswords: {
    flex: 1,
    padding: 14,
    backgroundColor: "#F3F3F3",
    gap: 15,
  },
});
