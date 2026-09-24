import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    marginLeft: 16,
  },
  name: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 18,
    color: theme.colors.heading,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statusText: {
    marginLeft: 8,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
});
