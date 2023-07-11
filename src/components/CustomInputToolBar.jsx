import { Entypo } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Button, HStack, Box, Icon, useTheme, VStack } from 'native-base'
import { StyleSheet, View, Keyboard, ViewStyle, Text } from 'react-native'
import { Send, Actions, Composer } from 'react-native-gifted-chat'
import { SimpleLineIcons } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

IMAGE_URL =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&q=32g.com/140/140/any'

export default function CustomInputToolbar(props) {
  const { colors, fontSizes } = useTheme()
  const [fullScreen, setFullScreen] = useState(false)

  const { containerStyle, showDrawingInput, setShowDrawingInput, ...rest } = props
  const { renderComposer } = rest

  if (!showDrawingInput) {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
        }}>
        <TouchableOpacity onPress={() => setShowDrawingInput(true)}>
          <View
            style={{
              backgroundColor: colors.primary['800'],
              borderRadius: 32,
              padding: 18,
              width: '80%',
              alignSelf: 'center',
            }}>
            <HStack space={2} alignItems="center" justifyContent="center">
              <Ionicons name="pencil" size={20} color="white" />
              <Text style={{ color: 'white', fontSize: 16 }}>Dessinez votre message</Text>
            </HStack>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View
      style={{
        height: fullScreen ? '100%' : '40%',
        backgroundColor: colors.primary['800'],
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: fullScreen ? 0 : 24,
        borderTopRightRadius: fullScreen ? 0 : 24,
        paddingRight: 20,
        paddingLeft: 20,
      }}>
      <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => setShowDrawingInput(false)}>
          <Entypo name="chevron-down" size={28} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: fullScreen ? 1 : 2,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View style={{ flex: 10, width: '100%' }}>
          <HStack space={3} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name="pencil" size={24} color={colors.white} />
            <Text style={{ textAlign: 'center', fontSize: fontSizes.primary, color: colors.white }}>
              Dessinez votre message
            </Text>
          </HStack>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => setFullScreen(!fullScreen)}>
            <SimpleLineIcons name="size-fullscreen" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: fullScreen ? 12 : 9, height: '100%' }}>{renderComposer?.(props)}</View>
    </View>
  )
}
