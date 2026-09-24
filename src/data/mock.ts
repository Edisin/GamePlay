/**
 * Dados falsos no lugar do que viria da API do Discord.
 * Nomes, textos e imagens são os mesmos do protótipo no Figma.
 */
import type { Appointment, Member, Server, User } from '../types/models';

export const user: User = {
  name: 'Tiago',
  avatar: require('../assets/images/avatar.png'),
};

export const servers: Server[] = [
  {
    id: '1',
    name: 'Lendários',
    game: 'League of Legends',
    icon: require('../assets/images/games/league-of-legends.png'),
  },
  {
    id: '2',
    name: 'Yeah, boy',
    game: 'Red Dead Redemption 2',
    icon: require('../assets/images/games/red-dead-redemption-2.png'),
  },
  {
    id: '3',
    name: 'Rumo ao topo',
    game: 'Counter Strike: Global Offensive',
    icon: require('../assets/images/games/counter-strike.png'),
  },
  {
    id: '4',
    name: 'Bora queimar tudo',
    game: 'Apex Legends',
    icon: require('../assets/images/games/apex-legends.png'),
  },
  {
    id: '5',
    name: 'Valorosos',
    game: 'Valorant',
    icon: require('../assets/images/games/valorant.png'),
  },
];

const [lendarios, yeahBoy, rumoAoTopo, boraQueimarTudo, valorosos] = servers;

export const appointments: Appointment[] = [
  {
    id: '1',
    server: lendarios,
    categoryId: '1',
    date: '18/06 às 21:00h',
    isHost: true,
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    server: yeahBoy,
    categoryId: '3',
    date: '23/06 às 19:00h',
    isHost: false,
    description: 'Noite de explorar o velho oeste com a galera e fechar as missões de caça',
  },
  {
    id: '3',
    server: rumoAoTopo,
    categoryId: '2',
    date: '20/06 às 09:00h',
    isHost: true,
    description: 'Duelo valendo a revanche da semana passada, quem perder paga o lanche',
  },
  {
    id: '4',
    server: boraQueimarTudo,
    categoryId: '1',
    date: '20/06 às 14:20h',
    isHost: true,
    description: 'Partida valendo subir de divisão, só entra quem estiver no voice',
  },
  {
    id: '5',
    server: valorosos,
    categoryId: '3',
    date: '18/06 às 21:00h',
    isHost: true,
    description: 'Partidas sem compromisso, o importante é se divertir',
  },
  {
    id: '6',
    server: rumoAoTopo,
    categoryId: '1',
    date: '27/06 às 22:00h',
    isHost: false,
    description: 'Treino de mira e estratégia antes do campeonato',
  },
];

export const members: Member[] = [
  {
    id: '1',
    name: 'Tiago Luchtenberg',
    avatar: require('../assets/images/members/tiago.jpg'),
    status: 'available',
  },
  {
    id: '2',
    name: 'Rodrigo Gonçalves',
    avatar: require('../assets/images/members/rodrigo.jpg'),
    status: 'busy',
  },
  {
    id: '3',
    name: 'Diego Fernandes',
    avatar: require('../assets/images/members/diego.png'),
    status: 'busy',
  },
];
