import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import PlusSvg from '../../assets/icons/plus.svg';
import { styles } from './styles';

export function ButtonAdd(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      accessibilityRole="button"
      {...props}
    >
      <PlusSvg />
    </TouchableOpacity>
  );
}
