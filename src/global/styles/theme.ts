/**
 * Tokens de design do GamePlay, extraídos do Figma.
 * Os comentários com "/" são os nomes dos estilos no Figma (ex.: Color/primary);
 * as demais cores aparecem direto nas telas do protótipo.
 */
export const theme = {
  colors: {
    primary: '#E51C44', // Color/primary
    heading: '#DDE3F0', // Texts/heading
    body: '#ABB1CC', // Texts/body
    success: '#32BD50', // "Visitante"
    line: '#991F36', // divisória dentro do botão com ícone
    background: '#0A1033', // tom mais escuro do fundo
    shape: '#1D2766', // inputs e divisórias de lista
    border: '#243189', // borda de cards, imagens e inputs
    shadow: 'rgba(17, 23, 61, 0.8)', // sombra do header
  },

  // Degradês sempre de cima para baixo
  gradients: {
    background: ['#0E1647', '#0A1033'], // Items/background
    shape: ['#171F52', '#1D2766'], // header e cards de categoria
    fade: ['rgba(12, 18, 59, 0)', '#0C123B'], // base da ilustração do login
    overlay: [
      'rgba(18, 29, 51, 0)',
      'rgba(18, 29, 51, 0.61)',
      'rgba(18, 29, 51, 0.83)',
      '#121D33',
    ], // banner da tela de detalhes
  },

  fonts: {
    titleMedium: 'Rajdhani_500Medium',
    titleBold: 'Rajdhani_700Bold',
    textRegular: 'Inter_400Regular',
    textMedium: 'Inter_500Medium',
  },
} as const;
