import { Platform, View } from 'react-native';

import { categories } from '../../data/categories';
import { styles } from './styles';

/**
 * Correção só para o navegador.
 * No web todos os SVGs dividem o mesmo documento HTML, e o degradê de um ícone é
 * procurado pelo id (ex.: url(#ranked_svg__a)) — vale o primeiro id da página.
 * A pilha de navegação esconde a tela anterior com display: none, e um degradê
 * dentro de algo com display: none deixa de funcionar para todos que usam aquele id
 * (os ícones de categoria da tela Agendar sumiam porque a Home fica escondida atrás).
 * Esta cópia invisível, mas renderizada, fica antes das telas e garante que o id
 * sempre aponte para uma definição válida. No celular cada SVG é isolado, então
 * o componente não renderiza nada.
 */
export function WebSvgDefs() {
  if (Platform.OS !== 'web') {
    return null;
  }

  return (
    <View style={styles.container} aria-hidden>
      {categories.map(({ id, icon: Icon }) => (
        <Icon key={id} />
      ))}
    </View>
  );
}
