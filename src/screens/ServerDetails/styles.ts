import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 234,
  },
  // No Figma a imagem do banner usa o modo de mesclagem "difference".
  // Fica numa View porque o estilo de Image não aceita mixBlendMode.
  bannerBlend: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mixBlendMode: 'difference',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 24,
    paddingRight: 40,
    paddingBottom: 24,
  },
  title: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 28,
    color: theme.colors.heading,
  },
  subtitle: {
    marginTop: 12,
    fontFamily: theme.fonts.textRegular,
    fontSize: 13,
    lineHeight: 21,
    color: theme.colors.heading,
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  members: {
    marginTop: 24,
  },
  membersContent: {
    paddingHorizontal: 24,
  },
  // A linha começa alinhada ao texto (48 do avatar + 16) e vai até a borda da tela
  divider: {
    marginTop: 11,
    marginBottom: 12,
    marginLeft: 64,
    marginRight: -24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
