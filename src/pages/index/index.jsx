import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {
  console.log('==>', process.env.TARO_APP_API)
  useLoad(() => {
    console.log('Page loaded.')
    
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
