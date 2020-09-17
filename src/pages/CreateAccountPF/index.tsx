import React, { useCallback, useRef } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { Text, Button, TextInput } from '../../components/MainComponents';
import DefaultLayout from '../../components/MainComponents/DefaultLayout';

const CreateAccountPF: React.FC = () => {
  return (
    <DefaultLayout>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" />
      <TextInput placeholder="Confirmar Senha" />

      <Button style={{ marginBottom: 20 }} variant="solid" text="Criar Conta" />
    </DefaultLayout>
  );
};

export default CreateAccountPF;
