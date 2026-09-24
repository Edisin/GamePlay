import RankedSvg from '../assets/icons/ranked.svg';
import DuelSvg from '../assets/icons/duel.svg';
import FunSvg from '../assets/icons/fun.svg';
import type { Category } from '../types/models';

export const categories: Category[] = [
  { id: '1', title: 'Ranqueada', icon: RankedSvg },
  { id: '2', title: 'Duelo 1x1', icon: DuelSvg },
  { id: '3', title: 'Diversão', icon: FunSvg },
];
