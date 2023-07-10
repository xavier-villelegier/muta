import { Canvas, Path, Skia } from '@shopify/react-native-skia'
import { Point } from './Draw'
import { View } from 'native-base'

export const ReceivedDrawing = ({ message }: { message: Point[] }) => {
  // let path = Skia.Path.Make()
  // if (!message[0]) return null
  // path.moveTo(message[0].x, message[0].y)
  // message.map(({ x, y }: Point) => {
  //   path.lineTo(x, y)
  // })
  // path.close()

  const path = Skia.Path.Make()
  path.moveTo(128, 0)
  path.lineTo(168, 80)
  path.lineTo(256, 93)
  path.lineTo(192, 155)
  path.lineTo(207, 244)
  path.lineTo(128, 202)
  path.lineTo(49, 244)
  path.lineTo(64, 155)
  path.lineTo(0, 93)
  path.lineTo(88, 80)
  path.lineTo(128, 0)
  path.close()

  console.log(path)

  return (
    <Canvas style={{ flex: 1, backgroundColor: 'red' }}>
      {/* <Path path={path} strokeWidth={5} style="stroke" color="#000000" /> */}
      <Path
        path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
        color="lightblue"
      />
    </Canvas>
  )
}
