import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation'

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" style="light" />
    </>
  );
}
