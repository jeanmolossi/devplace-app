import React, { useCallback, useRef } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import { Text, Button, TextInput } from '../../components/MainComponents';

const CreateAccountPJ = () => {
  return (
    <View>
      <TextInput placeholder="Nome Social" />
      <TextInput placeholder="CNPJ" />
      <TextInput placeholder="Email" style={{ marginBottom: 20 }} />
      <TextInput placeholder="Senha" />
      <TextInput placeholder="Confirmar Senha" />

      <Button style={{ marginBottom: 20 }} variant="solid" text="Criar Conta" />
    </View>
  );
};

export default CreateAccountPJ;
