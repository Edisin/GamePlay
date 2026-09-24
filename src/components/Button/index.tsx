import type { FC } from 'react';
import { Text, TouchableOpacity, View, type TouchableOpacityProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: FC<SvgProps>;
};

export function Button({ title, icon: Icon, style, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      accessibilityRole="button"
      {...rest}
    >
      {Icon && (
        <View style={styles.iconWrapper}>
          <Icon />
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
