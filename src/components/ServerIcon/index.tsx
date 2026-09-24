import { Image, type ImageSourcePropType } from 'react-native';

import { styles } from './styles';

type Props = {
  source: ImageSourcePropType;
};

export function ServerIcon({ source }: Props) {
  return <Image source={source} style={styles.image} />;
}
