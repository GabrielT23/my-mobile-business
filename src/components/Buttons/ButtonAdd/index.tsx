import { TouchableOpacityProps } from 'react-native';
import { ButtonText, ContainerButton } from './styles';

// Extender as propriedades do TouchableOpacity
type ButtonAddProps = TouchableOpacityProps & {
  text: string;
};

export function ButtonAdd({ text, ...rest }: ButtonAddProps) {
  return (
    <ContainerButton {...rest}>
      <ButtonText>{text}</ButtonText>
    </ContainerButton>
  );
}
