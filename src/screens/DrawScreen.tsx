import { Text, View } from 'native-base'
import { useLastMessagesIndex } from '../queries/useLastMessages'
import Draw, { Point } from '../components/Draw'
import { ReceivedDrawing } from '../components/ReceivedDrawing'

const DrawScreen = () => {
  const { data: lastMessageReceived } = useLastMessagesIndex()

  return (
    <>
      <Draw />
      <View flex={1} alignItems="center" justifyContent="center">
        <Text>Last message received</Text>
        <ReceivedDrawing message={lastMessageReceived?.content} />
        {lastMessageReceived && (
          <Text>
            {lastMessageReceived.id} -{' '}
            {lastMessageReceived?.content.map(({ x, y }: Point) => (
              <Text>
                ({x},{y})
              </Text>
            ))}
          </Text>
        )}
      </View>
    </>
  )
}

export default DrawScreen
