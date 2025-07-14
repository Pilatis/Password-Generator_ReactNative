import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import ModalPassword from "@/components/ModalPassword";
import { useStorage } from "@/hooks/useStorage";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function App() {
  const { saveItem } = useStorage();
  const [value, setValue] = useState(10);
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function generatePassword() {
    let password = "";

    for (let i = 0, n = charset.length; i < value; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(password);
    setOpenModal(true);
  }

  function saveToPasswords(passwordParam: string) {
    if (passwordParam) {
      saveItem("@password", passwordParam);

      alert("Senha salva com sucesso!");
      setOpenModal(false);
      setPassword("");
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} />
      <Text style={styles.text}>{value} caracteres</Text>

      {/* Sliders */}

      <View style={styles.sliderBox}>
        <Slider
          minimumValue={6}
          maximumValue={20}
          step={1}
          value={value}
          onValueChange={(values) => setValue(values[0])}
          containerStyle={styles.sliderContainer}
          thumbStyle={styles.thumb}
          minimumTrackStyle={{ backgroundColor: "#392DE9" }}
        />
      </View>

      <TouchableOpacity onPress={generatePassword} style={styles.button}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal
        visible={openModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setOpenModal(false)}
      >
        <ModalPassword
          password={password}
          handleClose={() => setOpenModal(false)}
          handleSavePassword={saveToPasswords}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  logo: {
    marginBottom: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
  sliderBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 20,
    padding: 25,
    backgroundColor: "#FFF",
    borderRadius: 5,
    elevation: 5,
  },
  sliderContainer: {
    width: "100%",
  },
  thumb: {
    width: 15,
    height: 15,
    backgroundColor: "#392DE9",
    borderRadius: 10,
  },
  button: {
    width: 280,
    backgroundColor: "#392DE9",
    color: "#FFF",
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
