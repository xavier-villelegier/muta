import { Entypo } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Button, HStack, Box, Icon, useTheme } from 'native-base'
import { StyleSheet, View, Keyboard, ViewStyle, Text } from 'react-native'
import { Send, Actions, Composer } from 'react-native-gifted-chat'
import { SimpleLineIcons } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
IMAGE_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&q=32g.com/140/140/any'

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'blue',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  accessory: {
    height: 44,
  },
})

export default function CustomInputToolbar(props) {
  const { colors, fontSizes } = useTheme()
  const [isClicked, setIsClicked] = useState(true)
  const [fullScreen, setFullScreen] = useState(true)
  useEffect(() => {
    return () => {}
  }, [])

  const { containerStyle, ...rest } = props
  const { onPressActionButton, renderSend, renderAccessory, renderComposer } = rest
  if (!isClicked) {
    return (
      <HStack space={2} alignItems="center">
        <Ionicons name="paper-plane" size={20} color={colors.primary['800']} />
        <Text color={colors.primary['900']}>Envoyer</Text>
      </HStack>
    )
  }

  return (
    <View
      style={{
        height: fullScreen ? '90%' : '50%',
        backgroundColor: colors.primary['800'],
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingRight: 20,
        paddingLeft: 20,
      }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
        <Entypo name="pencil" size={24} style={{ padding: 10 }} color={colors.white} />
        <Text style={{ textAlign: 'center', fontSize: fontSizes.primary, color: colors.white }}>
          Dessinez votre message
        </Text>
      </View>
      <View style={{ flex: 5, height: '100%' }}>{renderComposer?.(props)}</View>
    </View>
  )
}
