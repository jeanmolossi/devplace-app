import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import { Text, Button, TextInput } from '../../components/MainComponents';
import DefaultLayout from '../../components/MainComponents/DefaultLayout';
import {
  OrangeCircle,
  SingleSlide,
  WhiteCircle,
} from '../WelcomeScreen/styles';

const Login: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);

  const { navigate } = useNavigation();

  const onOpen = useCallback(() => {
    modalizeRef.current?.open();
  }, []);

  return (
    <DefaultLayout>
      <SingleSlide>
        <OrangeCircle />
        <WhiteCircle />
        <KeyboardAvoidingView style={{ width: '100%' }} behavior="padding">
          <Text h1>Bem Vindo ao DevPlace!</Text>
          <View style={{ width: '100%', marginTop: 16 }}>
            <TextInput placeholder="Email" style={{ marginBottom: 20 }} />
            <TextInput placeholder="Senha" />

            <Button
              variant="black"
              style={{ marginTop: 16 }}
              textStyle={{ fontSize: 14, color: '#979797' }}
              text="Esqueci minha senha"
            />
          </View>
        </KeyboardAvoidingView>

        <View style={{ width: '100%' }}>
          <Button style={{ marginBottom: 20 }} variant="solid" text="Acessar" />

          <Button
            textStyle={{ color: '#fff' }}
            variant="outline"
            text="Não tenho conta"
            onPress={onOpen}
          />
        </View>
      </SingleSlide>

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        handlePosition="inside"
        modalStyle={{
          paddingHorizontal: 16,
          paddingVertical: 32,
        }}
        childrenStyle={{
          paddingBottom: 34,
        }}
      >
        <Button
          onPress={() => navigate('CreateAccountPF')}
          text="Me cadastrar como Dev"
          style={{ marginBottom: 16 }}
        />
        <Button
          onPress={() => navigate('CreateAccountPJ')}
          text="Cadastrar minha empresa"
          variant="black"
        />
      </Modalize>
    </DefaultLayout>
  );
};

export default Login;
