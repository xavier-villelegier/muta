import { HStack, Text, useTheme } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SendButton = ({ onSend }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      accessible
      accessibilityLabel="send"
      style={{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 22,
      }}
      onPress={onSend}
      accessibilityRole="button">
      <HStack space={2} alignItems="center">
        <Ionicons name="paper-plane" size={20} color={colors.primary['900']} />
        <Text color={colors.primary['900']}>Envoyer</Text>
      </HStack>
    </TouchableOpacity>
  )
}

export default SendButton
