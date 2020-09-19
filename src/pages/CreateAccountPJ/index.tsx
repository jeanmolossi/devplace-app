import React from 'react';
import {
  Button,
  TextInput,
  DefaultLayout,
} from '../../components/MainComponents';

const CreateAccountPJ = () => {
  return (
    <DefaultLayout>
      <TextInput placeholder="Nome Social" />
      <TextInput placeholder="CNPJ" />
      <TextInput placeholder="Email" style={{ marginBottom: 20 }} />
      <TextInput placeholder="Senha" />
      <TextInput placeholder="Confirmar Senha" />

      <Button style={{ marginBottom: 20 }} variant="solid" text="Criar Conta" />
    </DefaultLayout>
  );
};

export default CreateAccountPJ;
