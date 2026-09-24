import { ScrollView } from 'react-native';

import { Category } from '../Category';
import { categories } from '../../data/categories';
import { styles } from './styles';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
  function handleSelect(categoryId: string) {
    // Tocar de novo na categoria selecionada desmarca
    setCategory(categoryId === categorySelected ? '' : categoryId);
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          // Sem nada selecionado, a Home (sem checkbox) mostra todas acesas, como no Figma
          checked={category.id === categorySelected || (!hasCheckBox && !categorySelected)}
          hasCheckBox={hasCheckBox}
          onPress={() => handleSelect(category.id)}
        />
      ))}
    </ScrollView>
  );
}
