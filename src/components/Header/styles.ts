import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 1, // mantém a sombra por cima do conteúdo que vem logo abaixo
    boxShadow: `0px 8px 24px ${theme.colors.shadow}`,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.titleBold,
    fontSize: 20,
    color: theme.colors.heading,
  },
  placeholder: {
    width: 24,
  },
});
