import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { ServerSelect } from '../../components/ServerSelect';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { servers } from '../../data/mock';
import type { RootStackParamList } from '../../routes/types';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Schedule'>;

// O modal com a lista de servidores está fora do escopo, então a tela já abre
// com "Valorosos" selecionado (frame "Agendar - Servidor selecionado" do Figma).
const selectedServer = servers[4];

export function Schedule({ navigation }: Props) {
  const [category, setCategory] = useState('');
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <Header title="Agendar partida" />

        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, 40) }]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.label, styles.categoryLabel]}>Categoria</Text>

          <CategorySelect hasCheckBox categorySelected={category} setCategory={setCategory} />

          <View style={styles.form}>
            <ServerSelect server={selectedServer} />

            <View style={styles.dateTime}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.inputs}>
                  <SmallInput accessibilityLabel="Dia" />
                  <Text style={styles.separator}>/</Text>
                  <SmallInput accessibilityLabel="Mês" />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Horário</Text>
                <View style={styles.inputs}>
                  <SmallInput accessibilityLabel="Hora" />
                  <Text style={styles.separator}>:</Text>
                  <SmallInput accessibilityLabel="Minuto" />
                </View>
              </View>
            </View>

            <View style={styles.descriptionHeader}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.limit}>Max 100 caracteres</Text>
            </View>

            <TextArea maxLength={100} accessibilityLabel="Descrição" />

            <View style={styles.footer}>
              <Button title="Agendar" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </ScrollView>
      </Background>
    </KeyboardAvoidingView>
  );
}
