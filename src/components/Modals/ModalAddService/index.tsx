import React, { useState } from 'react';
import { BaseModal } from '../BaseModal';
import { Input, Title, SubmitButton } from './styles';

interface AddServiceModalProps {
  visible: boolean;
  onClose: () => void;
  setServices: React.Dispatch<React.SetStateAction<Array<{ id: number; productName: string; price: number }>>>;
}

export function AddServiceModal({ visible, onClose, setServices }: AddServiceModalProps) {
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddService = () => {
    setServices(prev => [
      ...prev,
      { id: Date.now(), productName: serviceName, price: Number(price) },
    ]);
    onClose();
  };

  return (
    <BaseModal visible={visible} onClose={onClose}>
      <Title>Adicionar Serviço</Title>
      <Input
        placeholder="Nome do Serviço"
        value={serviceName}
        onChangeText={setServiceName}
      />
      <Input
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <SubmitButton title="Cadastrar" onPress={handleAddService} />
    </BaseModal>
  );
}
