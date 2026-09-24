import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.shape,
    textAlign: 'center',
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    color: theme.colors.heading,
  },
});
