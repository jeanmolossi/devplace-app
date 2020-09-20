import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useAuth } from '../../hooks/Auth';
import DrawerItems from './DrawerItems';

const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
): JSX.Element => {
  const { signOut } = useAuth();

  const { navigation } = props;

  const contentContainerStyle = {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  } as const;

  const defaultDrawerItemStyle = {
    inactiveTintColor: '#e8e8e8',
    labelStyle: { fontSize: 16 },
  };

  return (
    <DrawerContentScrollView
      {...props}
      {...{ contentContainerStyle, scrollEnabled: false }}
    >
      {DrawerItems.map(item => {
        let { label } = item;
        const { icon: Icon, key, navigateScreen } = item;

        label = label || navigateScreen;

        return (
          <DrawerItem
            onPress={() => navigation.navigate(item.navigateScreen)}
            {...{ key, label, icon: Icon }}
            {...defaultDrawerItemStyle}
          />
        );
      })}

      <DrawerItem
        label="Sair"
        icon={() => <Feather name="power" color="#FC4D4D" size={16} />}
        onPress={signOut}
        {...defaultDrawerItemStyle}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
