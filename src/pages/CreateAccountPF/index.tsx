import React from 'react';
import {
  Button,
  TextInput,
  DefaultLayout,
} from '../../components/MainComponents';

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
