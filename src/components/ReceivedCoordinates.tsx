import { Point } from './Draw'
import { Text, View } from 'native-base'

export const ReceivedCoordinates = ({ message }: { message: any }) => (
  <View>
    <Text>Last message received</Text>
    {message && (
      <Text>
        {message.id} -{' '}
        {message?.content.map(({ x, y }: Point) => (
          <Text>
            ({x},{y})
          </Text>
        ))}
      </Text>
    )}
  </View>
)
