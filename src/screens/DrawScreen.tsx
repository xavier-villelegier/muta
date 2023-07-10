import { useLastMessagesIndex } from '../queries/useLastMessages'
import Draw from '../components/Draw'
import { ReceivedDrawing } from '../components/ReceivedDrawing'
// import { ReceivedCoordinates } from '../components/ReceivedCoordinates'

const DrawScreen = () => {
  const { data: lastMessageReceived } = useLastMessagesIndex()

  return (
    <>
      <Draw />
      <ReceivedDrawing message={lastMessageReceived?.content} />
      {/* <ReceivedCoordinates message={lastMessageReceived} /> */}
    </>
  )
}

export default DrawScreen
