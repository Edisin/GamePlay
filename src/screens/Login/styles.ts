import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  // A ilustração é feita de camadas sobrepostas (listras, personagem e degradês),
  // por isso usa posição absoluta. As camadas passam da altura do bloco e ficam
  // por baixo do título, igual ao Figma.
  illustration: {
    width: 375,
    height: 295,
  },
  stripes: {
    position: 'absolute',
    top: 0,
    left: -6,
  },
  image: {
    position: 'absolute',
    top: 14,
    left: 72,
    width: 250,
    height: 297,
    transform: [{ scaleX: -1 }], // no Figma a ilustração está espelhada
  },
  fade: {
    position: 'absolute',
    left: 0,
    width: 375,
    height: 127,
  },
  stripesFade: {
    top: 280,
  },
  imageFade: {
    top: 191,
  },

  content: {
    width: '100%',
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 40,
    lineHeight: 40,
    textAlign: 'center',
    color: theme.colors.heading,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 48,
    fontFamily: theme.fonts.textRegular,
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    color: theme.colors.heading,
  },
});
