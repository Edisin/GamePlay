import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.textMedium,
    fontSize: 15,
    color: theme.colors.heading,
  },
});
