import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
    color: theme.colors.heading,
  },
  subtitle: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
});
