import type { FC } from 'react';
import { Text, TouchableOpacity, View, type TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import type { SvgProps } from 'react-native-svg';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon: FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={{ selected: checked }}
      {...rest}
    >
      <LinearGradient
        colors={theme.gradients.shape}
        style={[styles.container, !checked && styles.dimmed]}
      >
        {hasCheckBox && <View style={[styles.check, checked && styles.checked]} />}

        <Icon />
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
