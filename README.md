# GamePlay

Telas do protótipo **GamePlay (NLW Together)** implementadas em React Native para a disciplina de Programação de App.

Telas: **Login**, **Home**, **Detalhes do servidor** e **Agendar** (com servidor selecionado e troca de estado ao selecionar a categoria). O modal com a lista de servidores ficou fora do escopo, conforme o enunciado.

## Tecnologias

- React Native + Expo (SDK 57) com TypeScript
- React Navigation (native stack)
- expo-linear-gradient, react-native-svg + react-native-svg-transformer
- Fontes Rajdhani e Inter (@expo-google-fonts)

## Como rodar

Requisito: **Node.js 20.19.4+, 22.13+ ou 24.3+** (exigência do React Native 0.86).

```bash
npm install
npx expo start
```

- **Celular:** escaneie o QR code com o app Expo Go (celular e computador na mesma rede Wi-Fi). Se a rede bloquear a conexão, use `npx expo start --tunnel`.
- **Navegador:** aperte `w` no terminal do Expo ou rode `npx expo start --web`.
- O projeto usa o **Expo SDK 57**. Se o Expo Go do celular já estiver numa versão mais nova do SDK, atualize o projeto com `npx expo install expo@latest --fix`.

## Estrutura

```
src/
  assets/          imagens (png/jpg) e ícones (svg) exportados do Figma
  components/      componentes reutilizáveis (index.tsx + styles.ts cada)
  data/            categorias e dados falsos (mock) no lugar da API do Discord
  global/styles/   theme.ts com cores, degradês e fontes do Figma
  routes/          navegação (stack) e tipos das rotas
  screens/         Login, Home, ServerDetails, Schedule
  types/           tipos dos dados e declaração dos módulos .svg
```
