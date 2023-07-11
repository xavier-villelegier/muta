import { useTheme } from 'native-base'
import { Entypo } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Keyboard, Icon, ViewStyle, Text } from 'react-native'
import { Send, Actions, Composer } from 'react-native-gifted-chat'

const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 4,
    }}>
    <Image
      style={{ width: 32, height: 32 }}
      source={{
        uri: IMAGE_URL,
      }}
    />
  </Send>
)

const renderActions = (props) => (
  <Actions
    {...props}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 0,
    }}
    icon={() => (
      <Image
        style={{ width: 32, height: 32 }}
        source={{
          uri: IMAGE_URL,
        }}
      />
    )}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library')
      },
      Cancel: () => {
        console.log('Cancel')
      },
    }}
    optionTintColor="#222B45"
  />
)

const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      color: 'green',
      backgroundColor: 'pink',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#E4E9F2',
      paddingTop: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
    }}
  />
)

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
  const [fullScreen, setFullScreen] = useState(true)
  useEffect(() => {
    return () => {}
  }, [])

  const { containerStyle, ...rest } = props
  const { onPressActionButton, renderAccessory } = rest
  return (
    <View
      style={{
        height: fullScreen ? '90%' : '50%',
        backgroundColor: colors.primary['800'],
        position: 'absolute',
        paddingTop: '10%',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
        <Entypo name="pencil" size={24} style={{ padding: 10 }} color={colors.white} />
        <Text style={{ textAlign: 'center', fontSize: fontSizes.primary, color: colors.white }}>
          Dessinez votre message
        </Text>
      </View>
      <View style={{ height: 60, backgroundColor: 'blue' }}></View>
    </View>
  )
}
