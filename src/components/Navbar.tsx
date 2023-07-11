import { Avatar, Box, HStack, Icon, IconButton, StatusBar, Text, useTheme } from 'native-base'

const Navbar = () => {
  const { colors } = useTheme()

  return (
    <>
      <StatusBar backgroundColor={colors.primary['800']} barStyle="light-content" />
      <Box safeAreaTop backgroundColor={colors.primary['800']} />
      <HStack
        backgroundColor={colors.primary['800']}
        px={10}
        py={3}
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center" space={2}>
          <Avatar
            size="md"
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}>
            PD
          </Avatar>
          <Text color={colors.light['200']} fontSize="20">
            Jean Buissou
          </Text>
        </HStack>
      </HStack>
    </>
  )
}

export default Navbar
