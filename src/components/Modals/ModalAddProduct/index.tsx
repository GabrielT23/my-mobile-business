import React, { useState } from 'react';
import { BaseModal } from '../BaseModal';
import { Input, Title } from './styles';
import { ButtonSubmit } from '@components/Buttons/ButtonSubmit';

interface AddProductModalProps {
  visible: boolean;
  onClose: () => void;
  setProducts: React.Dispatch<React.SetStateAction<Array<{ id: number; productName: string; price: number }>>>;
}

export function AddProductModal({ visible, onClose, setProducts }: AddProductModalProps) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    setProducts(prev => [
      ...prev,
      { id: Date.now(), productName, price: Number(price) },
    ]);
    onClose(); // Fecha o modal após adicionar
  };

  return (
    <BaseModal visible={visible} onClose={onClose}>
      <Title>Cadastrar Produto</Title>
      <Input
        placeholder="Nome do Produto"
        value={productName}
        onChangeText={setProductName}
      />
      <Input
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <ButtonSubmit text='Cadastrar Produto' onPress={handleAddProduct} />
    </BaseModal>
  );
}
