import React from 'react';
import { View } from 'react-native';
import { Text, DefaultLayout } from '../../components/MainComponents';
import { ScreenRouteProps } from '../../types/routes';

type DashboardProps = ScreenRouteProps<'Dashboard'>;

const Dashboard = (_props: DashboardProps): JSX.Element => {
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
