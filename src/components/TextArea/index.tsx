import { TextInput, type TextInputProps } from 'react-native';

import { styles } from './styles';

export function TextArea(props: TextInputProps) {
  return <TextInput style={styles.container} multiline {...props} />;
}
