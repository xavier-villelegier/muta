import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { Canvas, Path } from '@shopify/react-native-skia'

interface IPath {
  segments: String[]
  color?: string
}

export interface Point {
  x: number
  y: number
}

// https://medium.com/react-native-rocket/building-a-hand-drawing-app-with-react-native-skia-and-gesture-handler-9797f5f7b9b4

export default function DrawInput() {
  const [paths, setPaths] = useState<IPath[]>([])
  const pathCoordinates = useRef<Point[]>([])

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

  return (
    <>
      <GestureHandlerRootView style={{ flex: 2 }}>
        <GestureDetector gesture={pan}>
          <View style={{ height: 150, backgroundColor: 'blue' }}>
            <Canvas style={{ flex: 8 }}>
              {paths.map((p, index) => (
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
    </>
  )
}
