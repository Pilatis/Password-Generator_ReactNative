# 🔐 Gerador e Gerenciador de Senhas - React Native

Aplicativo mobile desenvolvido em React Native com TypeScript que permite gerar senhas seguras e armazená-las localmente. Possui interface moderna, funcionalidades interativas e foco em usabilidade.

## 🚀 Tecnologias e Técnicas Utilizadas

- **React Native** + **TypeScript**
- Armazenamento local com hook customizado (`useStorage`)
- Navegação e atualização automática de dados com `useIsFocused`
- Estilização moderna com `SafeAreaView` e componentes animados

## ⚙️ Funcionalidades

### 🔧 Gerador de Senhas

- 🎚️ **Controle de tamanho**: Slider de 6 a 20 caracteres
- 🔐 **Geração aleatória**: Letras maiúsculas, minúsculas e números
- 👀 **Visualização em tempo real**: Comprimento da senha mostrado dinamicamente
- 💾 **Modal de confirmação**: Opções para salvar ou descartar a senha gerada

## 📱 Como executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/gerador-senhas-app.git

# Acesse a pasta
cd gerador-senhas-app

# Instale as dependências
npm install

# Inicie o app com Expo
npx expo start
