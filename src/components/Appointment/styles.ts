import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
    color: theme.colors.heading,
  },
  category: {
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginLeft: 6,
    fontFamily: theme.fonts.textMedium,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.heading,
  },
  player: {
    marginLeft: 4,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 17,
  },
  host: {
    color: theme.colors.primary,
  },
  guest: {
    color: theme.colors.success,
  },
});
