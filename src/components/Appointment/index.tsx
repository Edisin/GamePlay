import { Text, TouchableOpacity, View, type TouchableOpacityProps } from 'react-native';

import CalendarSvg from '../../assets/icons/calendar.svg';
import PlayerHostSvg from '../../assets/icons/player-host.svg';
import PlayerGuestSvg from '../../assets/icons/player-guest.svg';
import { ServerIcon } from '../ServerIcon';
import { categories } from '../../data/categories';
import type { Appointment as AppointmentData } from '../../types/models';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  data: AppointmentData;
};

export function Appointment({ data, ...rest }: Props) {
  const category = categories.find((item) => item.id === data.categoryId);
  const PlayerIcon = data.isHost ? PlayerHostSvg : PlayerGuestSvg;

  return (
    <TouchableOpacity activeOpacity={0.7} accessibilityRole="button" {...rest}>
      <View style={styles.container}>
        <ServerIcon source={data.server.icon} />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.server.name}</Text>
            <Text style={styles.category}>{category?.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.info}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.info}>
              <PlayerIcon />
              <Text style={[styles.player, data.isHost ? styles.host : styles.guest]}>
                {data.isHost ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
