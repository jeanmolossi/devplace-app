import React from 'react';
import {
  Button,
  TextInput,
  DefaultLayout,
  Text,
} from '../../components/MainComponents';

const CreateAccountPF: React.FC = () => {
  return (
    <DefaultLayout style={{ padding: 30 }}>
      <Text h1>Bem Vindo ao DevPlace!</Text>

      <TextInput placeholder="Nome" label="Nome" />

      <TextInput placeholder="Email" label="Email" />

      <TextInput placeholder="Senha" label="Senha" />

      <Button variant="solid" text="Criar Conta" />
    </DefaultLayout>
  );
};

export default CreateAccountPF;
