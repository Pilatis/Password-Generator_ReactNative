import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";

const ModalPassword: React.FC<{
  password: string;
  handleClose: () => void;
  handleSavePassword: (password: string) => void;
}> = ({ password, handleClose, handleSavePassword }) => {
  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    alert("Senha copiada para a área de transferência!");
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.passwordBox} onLongPress={handleCopyPassword}>
          <Text
            style={[styles.buttonText, { color: "white", textAlign: "center" }]}
          >
            {password}
          </Text>
        </Pressable>

        <View style={styles.buttonsBox}>
          <TouchableOpacity
            onPress={handleClose}
            style={{
              backgroundColor: "#F3F3F3",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
          >
            <Text style={[styles.buttonText, { color: "black" }]}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSavePassword(password)}
            style={{
              backgroundColor: "#392DE9",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              Salvar senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(24, 24, 24, 0.6)",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  passwordBox: {
    width: "100%",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  container: {
    width: 350,
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: "#F3F3FF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    borderRadius: 10,
    gap: 25,
  },
  buttonsBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default ModalPassword;
