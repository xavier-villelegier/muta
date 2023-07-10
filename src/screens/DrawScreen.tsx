import { View } from 'native-base'
import DrawCanvas from '../components/DrawCanvas'

const DrawScreen = () => {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <DrawCanvas />
    </View>
  )
}

export default DrawScreen
