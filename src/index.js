import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Main } from './navigation/Main';
import { FollowProvider } from './context';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FollowProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </FollowProvider>
    </>
  );
}
