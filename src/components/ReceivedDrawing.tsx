import { Canvas, Path, Skia, runTiming, useValue } from '@shopify/react-native-skia'
import { Point } from './Draw'
import { useEffect } from 'react'
import { View } from 'native-base'

export const ReceivedDrawing = ({ content }: { content: Point[] }) => {
  const end = useValue(0)

  let path = Skia.Path.Make()
  path.moveTo(content[0].x, content[0].y)
  content.map(({ x, y }: Point) => {
    path.lineTo(x, y)
  })

  useEffect(() => {
    if (!content) return

    runTiming(end, { from: 0, to: 1 }, { duration: 1000 })
  }, [])

  return (
    <View flex={1}>
      <Canvas style={{ flex: 1 }}>
        <Path path={path} strokeWidth={5} style="stroke" color="#000000" start={0} end={end} />
      </Canvas>
    </View>
  )
}
