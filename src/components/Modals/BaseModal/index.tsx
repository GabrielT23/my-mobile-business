import React from 'react';
import { Modal, Animated, Easing } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  Overlay,
  Background,
  ModalContainer,
  Header,
  CloseButton,
  ModalContent,
} from './styles';

interface BaseModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function BaseModal({ visible, onClose, children }: BaseModalProps) {
  const theme = useTheme();
  const slideAnim = React.useRef(new Animated.Value(300)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="none">
      <Overlay>
        <Background onPress={onClose} />
        <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
          <ModalContainer>
            <Header>
              <CloseButton onPress={onClose}>
                X
              </CloseButton>
            </Header>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </Animated.View>
      </Overlay>
    </Modal>
  );
}

