import React, { useCallback, useRef } from 'react';
import { Dimensions } from 'react-native';
import Animated, { divide } from 'react-native-reanimated';
import { useScrollHandler } from 'react-native-redash';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, Button } from '../../components/MainComponents';
import Dot from './Dot';
import {
  Container,
  SingleSlide,
  OrangeCircle,
  WhiteCircle,
  InsideWhiteCircle,
  ButtonsContainer,
} from './styles';

const { width } = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const scrollViewRef = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();

  const gotoLogin = useCallback(() => {
    navigate('Login');
  }, []);

  const onPress = useCallback((slide: number) => {
    const goToParse = slide - 1;

    if (scrollViewRef.current) {
      scrollViewRef.current
        .getNode()
        .scrollTo({ x: width * goToParse, animated: true });
    }
  }, []);

  return (
    <Container>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        snapToInterval={width}
        bounces={false}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        {...{ ...scrollHandler }}
      >
        <SingleSlide>
          <Text h1>Bem Vindo!</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit,
            voluptates possimus repellendus expedita voluptate aspernatur
            veritatis rem non aut architecto blanditiis eaque sed aliquid
            voluptatem! Dicta dignissimos consectetur nemo!
          </Text>

          <ButtonsContainer>
            <Button
              onPress={gotoLogin}
              variant="black"
              text="Pular para login"
            />
            <Button onPress={() => onPress(2)}>
              <Feather name="arrow-right" color="#fff" size={20} />
            </Button>
          </ButtonsContainer>

          <OrangeCircle />
          <WhiteCircle />
        </SingleSlide>

        <SingleSlide>
          <Text h1>Cadastro Pessoa Fisica</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            nihil. Veritatis culpa quas maiores nobis rem porro, praesentium,
            voluptas, qui recusandae ipsa aspernatur saepe provident magni quod
            sit nam sint!
          </Text>
          <ButtonsContainer>
            <Button
              onPress={gotoLogin}
              variant="black"
              text="Pular para login"
            />
            <Button onPress={() => onPress(3)}>
              <Feather name="arrow-right" color="#fff" size={20} />
            </Button>
          </ButtonsContainer>
        </SingleSlide>

        <SingleSlide>
          <Text h1>Cadastro Pessoa Juridica</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste laudantium repellat repudiandae! Dolor ad eos necessitatibus
            inventore iure modi corrupti vel doloribus omnis ab. Voluptates
            minima dicta aperiam esse.
          </Text>
          <ButtonsContainer>
            <Button
              onPress={gotoLogin}
              variant="black"
              text="Pular para login"
            />
            <Button onPress={gotoLogin}>
              <Feather name="arrow-right" color="#fff" size={20} />
            </Button>
          </ButtonsContainer>
          <OrangeCircle>
            <InsideWhiteCircle />
          </OrangeCircle>
        </SingleSlide>
      </Animated.ScrollView>

      <Animated.View
        style={{
          position: 'absolute',
          width,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          bottom: 24,
          left: 36,
        }}
      >
        <Dot currentIndex={divide(x, width)} index={0} />
        <Dot style={{ width: 24 }} currentIndex={divide(x, width)} index={1} />
        <Dot currentIndex={divide(x, width)} index={2} />
      </Animated.View>
    </Container>
  );
};

export default WelcomeScreen;

/**
 *
 * KeyboardAvoidingView
 */
