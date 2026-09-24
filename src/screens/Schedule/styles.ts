import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingTop: 32,
  },
  label: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
    color: theme.colors.heading,
  },
  categoryLabel: {
    marginLeft: 24,
    marginBottom: 12,
  },
  form: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 32,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  separator: {
    marginHorizontal: 4,
    fontFamily: theme.fonts.textMedium,
    fontSize: 15,
    color: theme.colors.body,
  },
  descriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 12,
  },
  limit: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
  // "auto" empurra o botão para o fim da tela em aparelhos mais altos;
  // o paddingTop garante o espaço mínimo do Figma acima dele
  footer: {
    marginTop: 'auto',
    paddingTop: 56,
  },
});
