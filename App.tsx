import 'react-native-gesture-handler';
import React from 'react';
import {
  FiraMono_400Regular,
  FiraMono_500Medium,
  FiraMono_700Bold,
} from '@expo-google-fonts/fira-mono';
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    FiraMono_400Regular,
    FiraMono_500Medium,
    FiraMono_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" translucent />
      <Routes />
    </>
  );
};

export default App;
