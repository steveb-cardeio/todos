import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface ErrorScreenProps {
  message?: String
}

const ErrorScreen: FC<ErrorScreenProps> = ({ message = 'Error Occcured'}) => {
  return (<View style={styles.container}><Text style={styles.title} variant={'titleMedium'}>{message}</Text></View>);
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', flex: 1},
  title: { textAlign: 'center' }
});

export default ErrorScreen
