import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { appointments, user } from '../../data/mock';
import type { RootStackParamList } from '../../routes/types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Divider() {
  return <ListDivider style={styles.divider} />;
}

export function Home({ navigation }: Props) {
  const [category, setCategory] = useState('');
  const insets = useSafeAreaInsets();

  // Na Home, a categoria selecionada filtra as partidas
  const matches = category
    ? appointments.filter((item) => item.categoryId === category)
    : appointments;

  return (
    <Background>
      <View style={[styles.header, { marginTop: insets.top + 12 }]}>
        <Profile user={user} />
        <ButtonAdd
          accessibilityLabel="Agendar partida"
          onPress={() => navigation.navigate('Schedule')}
        />
      </View>

      <CategorySelect categorySelected={category} setCategory={setCategory} />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle={`Total ${matches.length}`} />

        <FlatList
          data={matches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => navigation.navigate('ServerDetails', { appointmentId: item.id })}
            />
          )}
          ItemSeparatorComponent={Divider}
          style={styles.matches}
          contentContainerStyle={[styles.matchesContent, { paddingBottom: insets.bottom + 24 }]}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
