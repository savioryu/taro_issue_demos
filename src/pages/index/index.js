import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'


import './index.less'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  redirect(url) {
    Taro.navigateTo({
      url
    });
  }

  render () {
    return (
      <View className='index'>
        <View>
          <Text className='text'>
            Uncaught (in promise) Error: Could not find store in either the context or props of Connect(WrapperComponent).
            Either wrap the root component in a Provider, or explicitly pass store as a prop to Connect(WrapperComponent).
           </Text>
         </View>
        <Button onClick={this.redirect.bind(this, '/pages/list-redux/index')}>消息页(数据来自 props redux)</Button>
        <Button onClick={this.redirect.bind(this, '/pages/list-state/index')}>消息页(数据来自 state setState)</Button>
      </View>
    )
  }
}

export default Index
