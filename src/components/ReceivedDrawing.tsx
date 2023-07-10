import { Canvas, Path, Skia } from '@shopify/react-native-skia'
import { Point } from './Draw'
import { View } from 'native-base'

export const ReceivedDrawing = ({ message }: { message: Point[] }) => {
  if (message === undefined) return null

  let path = Skia.Path.Make()
  path.moveTo(message[0].x, message[0].y)
  message.map(({ x, y }: Point) => {
    path.lineTo(x, y)
  })

  return (
    <Canvas style={{ flex: 1 }}>
      <Path path={path} strokeWidth={5} style="stroke" color="#000000" />
    </Canvas>
  )
}
