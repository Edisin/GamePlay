import type { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowLeftSvg from '../../assets/icons/arrow-left.svg';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={theme.gradients.shape}
      style={[styles.container, { paddingTop: top, height: top + 60 }]}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel="Voltar"
      >
        <ArrowLeftSvg />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {/* Sem ação, um espaço do tamanho do ícone mantém o título centralizado */}
      {action ?? <View style={styles.placeholder} />}
    </LinearGradient>
  );
}
