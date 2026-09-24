// Parâmetros de cada rota: "undefined" = a tela não recebe nada
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  ServerDetails: { appointmentId: string };
  Schedule: undefined;
};
