import React from 'react';
import { View } from 'react-native';
import { DashboardRouteProps } from '../../../types/routes';
import DefaultLayout from '../DefaultLayout';
import { Text } from '../Text/styles';

const Dashboard = (_props: DashboardRouteProps): JSX.Element => {
  return (
    <DefaultLayout>
      <View>
        <Text>Dashboard</Text>
        <Text style={{ color: '#000' }}>Dashboard</Text>
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
