import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.shape,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 21,
    color: theme.colors.heading,
    textAlignVertical: 'top', // no Android o texto de um multiline começa centralizado
  },
});
