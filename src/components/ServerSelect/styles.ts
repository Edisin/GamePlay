import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
    color: theme.colors.heading,
  },
  subtitle: {
    marginTop: 4,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
});
