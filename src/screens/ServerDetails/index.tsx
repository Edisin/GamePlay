import { FlatList, Image, Share, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import DiscordSvg from '../../assets/icons/discord.svg';
import ShareSvg from '../../assets/icons/share.svg';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { appointments, members } from '../../data/mock';
import { theme } from '../../global/styles/theme';
import type { RootStackParamList } from '../../routes/types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ServerDetails'>;

const OVERLAY_LOCATIONS = [0, 0.54, 0.77, 1] as const;

function Divider() {
  return <ListDivider style={styles.divider} />;
}

export function ServerDetails({ route }: Props) {
  const insets = useSafeAreaInsets();

  // A rota recebe só o id (recomendação do React Navigation) e a tela busca o resto
  const appointment = appointments.find((item) => item.id === route.params.appointmentId);

  if (!appointment) {
    return null;
  }

  const { server, date, description } = appointment;

  async function handleShare() {
    try {
      await Share.share({ message: `Bora jogar? Partida no servidor ${server.name}, ${date}.` });
    } catch {
      // Navegadores sem suporte a compartilhamento lançam erro; nesse caso não há o que fazer
    }
  }

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity
            onPress={handleShare}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Compartilhar"
          >
            <ShareSvg />
          </TouchableOpacity>
        }
      />

      {/* O banner repete o degradê do fundo: o modo "difference" mistura a imagem com o que
          está atrás dela, e com o fundo dentro do próprio banner isso funciona igual no celular e no web */}
      <LinearGradient colors={theme.gradients.background} style={styles.banner}>
        <View style={styles.bannerBlend}>
          <Image source={require('../../assets/images/banner.png')} style={styles.bannerImage} />
        </View>

        <LinearGradient
          colors={theme.gradients.overlay}
          locations={OVERLAY_LOCATIONS}
          style={styles.bannerContent}
        >
          <Text style={styles.title}>{server.name}</Text>
          <Text style={styles.subtitle}>{description}</Text>
        </LinearGradient>
      </LinearGradient>

      <View style={styles.content}>
        <ListHeader title="Jogadores" subtitle={`Total ${members.length}`} />

        <FlatList
          data={members}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Member data={item} />}
          ItemSeparatorComponent={Divider}
          style={styles.members}
          contentContainerStyle={styles.membersContent}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 40) }]}>
        <Button icon={DiscordSvg} title="Entrar na partida" />
      </View>
    </Background>
  );
}
