import { Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import DiscordSvg from '../../assets/icons/discord.svg';
import StripesSvg from '../../assets/images/stripes.svg';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { theme } from '../../global/styles/theme';
import type { RootStackParamList } from '../../routes/types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const FADE_LOCATIONS = [0, 0.86] as const;

export function Login({ navigation }: Props) {
  const { top } = useSafeAreaInsets();

  function handleSignIn() {
    // O login real com o Discord não faz parte desta entrega: o botão só avança.
    // "replace" tira o Login da pilha, então o botão voltar não retorna para cá.
    navigation.replace('Home');
  }

  return (
    <Background>
      <View style={[styles.container, { paddingTop: top + 56 }]}>
        <View style={styles.illustration}>
          <StripesSvg style={styles.stripes} />
          <LinearGradient
            colors={theme.gradients.fade}
            locations={FADE_LOCATIONS}
            style={[styles.fade, styles.stripesFade]}
          />
          <Image source={require('../../assets/images/illustration.png')} style={styles.image} />
          <LinearGradient
            colors={theme.gradients.fade}
            locations={FADE_LOCATIONS}
            style={[styles.fade, styles.imageFade]}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}e organize suas{'\n'}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
          </Text>

          <Button icon={DiscordSvg} title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
