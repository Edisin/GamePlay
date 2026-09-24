import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    marginLeft: 20,
  },
  greeting: {
    fontFamily: theme.fonts.titleMedium,
    fontSize: 24,
    color: theme.colors.heading,
  },
  username: {
    fontFamily: theme.fonts.titleBold,
  },
  message: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
});
