import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '../store';
import StoreSetup from '../components/StoreSetup';

export default function _layout() {

  return (
    <PaperProvider>
      <Provider store={store}>
        <>
          <StoreSetup />
          <Stack initialRouteName={''} />
        </>
      </Provider>
    </PaperProvider>
  );
}
