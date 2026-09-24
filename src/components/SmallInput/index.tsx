import { TextInput, type TextInputProps } from 'react-native';

import { styles } from './styles';

export function SmallInput(props: TextInputProps) {
  return (
    <TextInput style={styles.container} keyboardType="number-pad" maxLength={2} {...props} />
  );
}
