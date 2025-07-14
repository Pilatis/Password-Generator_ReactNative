import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = () => {
  const getItems = async (key: string) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return passwords ? JSON.parse(passwords) : [];
    } catch (error) {
      console.error("Error retrieving data from storage:", error);
      return [];
    }
  };

  const saveItem = async (key: string, value: string) => {
    try {
      let passwords = await getItems(key);

      if (passwords) {
        passwords.push(value);

        await AsyncStorage.setItem(key, JSON.stringify(passwords));
      }
    } catch (error) {
      console.error("Error saving data to storage:", error);
    }
  };

  const removeItem = async (key: string, item: string) => {
    try {
      let passwords = await getItems(key);

      let myPasswords = passwords.filter((password: string) => {
        return password !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
      return myPasswords;
    } catch (error) {
      console.error("Error removing data from storage:", error);
    }
  };

  return {
    getItems,
    saveItem,
    removeItem,
  };
};
