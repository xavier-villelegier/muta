import { HStack, Text, useTheme } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ClearButton = ({ onClear }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      accessible
      accessibilityLabel="send"
      style={{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onClear}
      accessibilityRole="button">
      <HStack space={2} alignItems="center">
        <Ionicons name="close" size={20} color={colors.light['100']} />
        <Text color={colors.primary['100']}>Clear</Text>
      </HStack>
    </TouchableOpacity>
  )
}

export default ClearButton
