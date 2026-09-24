import { StyleSheet } from 'react-native';

// Tamanho zero em vez de display: none — assim o navegador continua renderizando os degradês
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
});
