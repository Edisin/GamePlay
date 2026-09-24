import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  content: {
    flex: 1,
    marginTop: 40,
  },
  matches: {
    marginTop: 24,
  },
  matchesContent: {
    paddingHorizontal: 24,
  },
  // A linha começa alinhada ao texto (64 da imagem + 20) e vai até a borda da tela
  divider: {
    marginTop: 1,
    marginBottom: 31,
    marginLeft: 84,
    marginRight: -24,
  },
});
