import type { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  return (
    <LinearGradient style={styles.container} colors={theme.gradients.background}>
      {children}
    </LinearGradient>
  );
}
