import React, { useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { Canvas, Path } from '@shopify/react-native-skia'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from 'native-base'
import SendButton from './chat/SendButton'
import { useMessageCreate } from '../queries/useMessages'

export interface IPath {
  segments: String[]
  color?: string
}

export interface Point {
  x: number
  y: number
}

// https://medium.com/react-native-rocket/building-a-hand-drawing-app-with-react-native-skia-and-gesture-handler-9797f5f7b9b4

const Draw = (props) => {
  const [paths, setPaths] = useState([])
  const pathCoordinates = useRef([])
  const { colors } = useTheme()
  const { mutateAsync: sendMessage } = useMessageCreate()

  const { setShowDrawingInput } = props

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths]
      newPaths[paths.length] = {
        segments: [],
        color: '#00000',
      }
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`)
      setPaths(newPaths)
      pathCoordinates.current = [{ x: g.x, y: g.y }]
    })
    .onUpdate((g) => {
      const index = paths.length - 1
      const newPaths = [...paths]
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`)
        setPaths(newPaths)
        pathCoordinates.current.push({ x: g.x, y: g.y })
      }
    })
    .minDistance(1)

  const onClear = () => {
    setPaths([])
  }

  const onSend = async () => {
    await sendMessage({
      coordinates: pathCoordinates.current,
    })
    onClear()
    setShowDrawingInput(false)
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 5 }}>
        <GestureDetector gesture={pan}>
          <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
            <TouchableOpacity
              onPress={onClear}
              style={{
                margin: 10,
              }}>
              <Ionicons name="close" size={30} color={colors.light['900']} />
            </TouchableOpacity>
            <Canvas style={{ flex: 1 }}>
              {paths?.map((p, index) => (
                <Path
                  key={index}
                  path={p.segments.join(' ')}
                  strokeWidth={5}
                  style="stroke"
                  color={p.color}
                />
              ))}
            </Canvas>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 20,
        }}>
        <SendButton onSend={onSend} disabled={paths.length === 0} />
      </View>
    </>
  )
}

export default Draw
