import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function App() {
 
  const [comentario, setComentario] = useState("");

  return (

    <SafeAreaView style={styles.container}>
      {/* <ScrollView> permite a rolagem caso o conteúdo passe do tamanho da tela */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <View> principal do cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Minha Rede Social - Unidade III</Text>
        </View>

        {/* Card de Perfil */}
        <View style={styles.card}>
          {/* <Image> utilizando Recurso Local */}
          // Dentro de app/index.tsx
          {/* <Image> utilizando Recurso Local */}
          <Image
            source={require("../assets/avatar.png")} // Agora basta voltar uma pasta (../) para achar o assets
            style={styles.localImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Alex Silva</Text>
            <Text style={styles.profileBio}>
              Desenvolvedor React Native em treinamento.
            </Text>
          </View>
        </View>

        {/* Card de Postagem (Conteúdo) */}
        <View style={styles.postCard}>
          <Text style={styles.postTitle}>Post do Dia 🚀</Text>
          <Text style={styles.postDescription}>
            Configurando componentes básicos no Expo. Olhem essa imagem incrível
            vinda direto de uma URL externa!
          </Text>

          {/* <Image> utilizando URL Externa */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            }}
            style={styles.externalImage}
          />
        </View>

        {/* Área de Interação com o Usuário */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Deixe seu comentário:</Text>

          {/* <TextInput> para interação do usuário */}
          <TextInput
            style={styles.input}
            placeholder="Digite algo aqui..."
            placeholderTextColor="#888"
            value={comentario}
            onChangeText={setComentario}
          />

          {/* <Text> exibindo o feedback em tempo real do que foi digitado */}
          {comentario ? (
            <View style={styles.feedbackContainer}>
              <Text style={styles.feedbackLabel}>Você está digitando:</Text>
              <Text style={styles.feedbackText}>{comentario}</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// <StyleSheet> para organizar e aplicar a estilização da interface
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
    alignItems: "center",
  },
  localImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Deixa a imagem redonda
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  profileBio: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  postCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postDescription: {
    fontSize: 14,
    color: "#444",
    marginBottom: 12,
    lineHeight: 20,
  },
  externalImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: "#333",
  },
  feedbackContainer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#eefbfe",
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: "#00bcd4",
  },
  feedbackLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
  },
  feedbackText: {
    fontSize: 14,
    color: "#333",
    fontStyle: "italic",
    marginTop: 2,
  },
});
