import type { FC } from 'react';
import type { ImageSourcePropType } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export type Category = {
  id: string;
  title: string;
  icon: FC<SvgProps>;
};

export type Server = {
  id: string;
  name: string;
  game: string;
  icon: ImageSourcePropType;
};

export type Appointment = {
  id: string;
  server: Server;
  categoryId: string;
  date: string;
  description: string;
  isHost: boolean;
};

export type Member = {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
  status: 'available' | 'busy';
};

export type User = {
  name: string;
  avatar: ImageSourcePropType;
};
