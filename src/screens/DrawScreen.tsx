import Navbar from '../components/Navbar'
import { View, useTheme } from 'native-base'
import Chat from '../components/Chat'
import { useMessagesIndex } from '../queries/useMessages'

const DrawScreen = () => {
  const { colors } = useTheme()
  const { data: messages, isSuccess } = useMessagesIndex()

  return (
    <View style={{ backgroundColor: colors.primary['600'], height: '100%' }}>
      <Navbar />
      {isSuccess && <Chat messages={messages} />}
    </View>
  )
}

export default DrawScreen
