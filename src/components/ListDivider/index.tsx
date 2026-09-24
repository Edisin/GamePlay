import { View, type StyleProp, type ViewStyle } from 'react-native';

import { styles } from './styles';

type Props = {
  // Cada lista define recuo e espaçamento da linha (Home e Detalhes são diferentes)
  style?: StyleProp<ViewStyle>;
};

export function ListDivider({ style }: Props) {
  return <View style={[styles.container, style]} />;
}
