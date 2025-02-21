import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import { IdentityProvider } from './IdentityContext';

// import { enableScreens } from 'react-native-screens';

const App = () => {
  // enableScreens();
  return (
    <IdentityProvider>
     <RootNavigation/>
     </IdentityProvider>
     );
};
export default App








