import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

// Posições absolutas e paddings contam a partir de dentro da borda de 1px,
// por isso 19 e 7 aqui viram 20 e 8 medidos do lado de fora (valores do Figma).
export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    paddingTop: 19,
  },
  dimmed: {
    opacity: 0.5,
  },
  title: {
    marginTop: 16,
    fontFamily: theme.fonts.titleBold,
    fontSize: 15,
    color: theme.colors.heading,
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
  checked: {
    borderWidth: 0,
    backgroundColor: theme.colors.primary,
  },
});
