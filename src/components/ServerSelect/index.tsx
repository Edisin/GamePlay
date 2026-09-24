import { Text, View } from 'react-native';

import ChevronRightSvg from '../../assets/icons/chevron-right.svg';
import { ServerIcon } from '../ServerIcon';
import type { Server } from '../../types/models';
import { styles } from './styles';

type Props = {
  server: Server;
};

// No app completo este campo abre o modal com a lista de servidores (fora do escopo).
export function ServerSelect({ server }: Props) {
  return (
    <View style={styles.container}>
      <ServerIcon source={server.icon} />

      <View style={styles.content}>
        <Text style={styles.title}>{server.name}</Text>
        <Text style={styles.subtitle}>{server.game}</Text>
      </View>

      <ChevronRightSvg />
    </View>
  );
}
