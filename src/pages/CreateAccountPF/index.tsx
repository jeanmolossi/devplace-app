import React, { useCallback, useRef } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import { Text, Button, TextInput } from '../../components/MainComponents';

const CreateAccountPF = () => {
  return (
    <View>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="Email" style={{ marginBottom: 20 }} />
      <TextInput placeholder="Senha" />
      <TextInput placeholder="Confirmar Senha" />

      <Button style={{ marginBottom: 20 }} variant="solid" text="Criar Conta" />
    </View>
  );
};

export default CreateAccountPF;
