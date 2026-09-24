import { Text, View } from 'react-native';

import { Avatar } from '../Avatar';
import type { User } from '../../types/models';
import { styles } from './styles';

type Props = {
  user: User;
};

export function Profile({ user }: Props) {
  return (
    <View style={styles.container}>
      <Avatar source={user.avatar} />

      <View style={styles.texts}>
        <Text style={styles.greeting}>
          Olá, <Text style={styles.username}>{user.name}</Text>
        </Text>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
