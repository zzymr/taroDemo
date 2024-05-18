import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Home() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='home'>
      <Text>Hello world!</Text>
    </View>
  )
}
