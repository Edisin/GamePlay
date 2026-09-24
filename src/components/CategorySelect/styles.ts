import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ScrollView horizontal cresce na vertical por padrão (flexGrow: 1)
  container: {
    flexGrow: 0,
  },
  content: {
    paddingHorizontal: 24,
    gap: 8,
  },
});
