import React from 'react';
import { AntDesign } from '@expo/vector-icons';

type DrawerItemType = {
  key: string | number;
  label?: string;
  navigateScreen: string;
  icon(): JSX.Element;
};

export default [
  {
    key: '1',
    label: 'Dashboard',
    navigateScreen: 'Dashboard',
    icon: () => <AntDesign name="dashboard" color="#fff" size={16} />,
  },
  {
    key: '2',
    label: 'WelcomeScreen',
    navigateScreen: 'WelcomeScreen',
    icon: () => <AntDesign name="dashboard" color="#fff" size={16} />,
  },
] as DrawerItemType[];
