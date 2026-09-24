import { Image, View, type ImageSourcePropType } from 'react-native';

import { styles } from './styles';

type Props = {
  source: ImageSourcePropType;
};

export function Avatar({ source }: Props) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}
