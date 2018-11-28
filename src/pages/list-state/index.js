import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import Message from '../../components/message'

class List extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  async componentDidMount () {
    setTimeout(()=>{
      const messages = [
        'messages1',
        'messages2',
        'messages3',
        'messages4',
        'messages5',
      ]
    this.setState({messages})
    }, 1000)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { messages } = this.state
    return (
      <View className='list'>
        {messages.map((message, idx) => {
          return <Message key={idx}>{message}</Message>
        })}
      </View>
    )
  }
}

export default List
