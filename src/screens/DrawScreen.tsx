import { useLastMessagesIndex } from '../queries/useLastMessages'

import Navbar from '../components/Navbar'
import { View, useTheme } from 'native-base'
import Draw from '../components/Draw'
import { ReceivedDrawing } from '../components/ReceivedDrawing'
import Chat from '../components/Chat'
// import { ReceivedCoordinates } from '../components/ReceivedCoordinates'

const DrawScreen = () => {
  const { colors } = useTheme()
  // const { data: lastMessageReceived } = useLastMessagesIndex()

  return (
    <View style={{ backgroundColor: colors.primary['600'], height: '100%' }}>
      <Navbar />
      <Chat />
      {/* <Draw /> */}
      {/* <ReceivedDrawing message={lastMessageReceived?.content} /> */}
      {/* <ReceivedCoordinates message={lastMessageReceived} /> */}
    </View>
  )
}

export default DrawScreen
