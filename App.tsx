//React Navigation
import DefaultStack from './src/navigators/Stack';
import { NavigationContainer } from '@react-navigation/native';

//Styled Components
import { ThemeProvider } from 'styled-components';
// import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

//Redux Configs
import { store, persistor } from './src/redux/store';
import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProviderRedux store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            {/* <GlobalStyles /> */}
            <DefaultStack />
          </NavigationContainer>
        </PersistGate>
      </ProviderRedux>
    </ThemeProvider>
  );
};

export default App;
