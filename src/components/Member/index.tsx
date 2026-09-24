import { Text, View } from 'react-native';

import StatusAvailableSvg from '../../assets/icons/status-available.svg';
import StatusBusySvg from '../../assets/icons/status-busy.svg';
import { Avatar } from '../Avatar';
import type { Member as MemberData } from '../../types/models';
import { styles } from './styles';

type Props = {
  data: MemberData;
};

export function Member({ data }: Props) {
  const isAvailable = data.status === 'available';
  const StatusIcon = isAvailable ? StatusAvailableSvg : StatusBusySvg;

  return (
    <View style={styles.container}>
      <Avatar source={data.avatar} />

      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>

        <View style={styles.status}>
          <StatusIcon />
          <Text style={styles.statusText}>{isAvailable ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}
