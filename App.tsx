import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { Platform, UIManager } from 'react-native'
import { NativeBaseProvider, extendTheme } from 'native-base'
import { StatusBar } from 'expo-status-bar'

import DrawScreen from './src/screens/DrawScreen'

const queryClient = new QueryClient()

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}

axios.defaults.baseURL = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'
// axios.defaults.baseURL = 'http://172.18.6.224:3000'

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        600: '#D7F4EC',
        700: '#44CAA2',
        800: '#377461',
        900: '#214F41',
      },
      light: {
        200: '#ECECEC',
      },
    },
    fontSizes: {
      primary: 16,
      small: 14,
      big: 20
    },
    config: {
      initialColorMode: 'dark',
    },
  })

  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <StatusBar />
        <DrawScreen />
      </QueryClientProvider>
    </NativeBaseProvider>
  )
}
