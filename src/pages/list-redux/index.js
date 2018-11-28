import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Message from '../../components/message'
import { getMessages } from '../../actions/message'

@connect(({ message }) => ({
  messages: message.list
}), (dispatch) => ({
  getMessages() {
    dispatch(getMessages())
  }
}))
class List extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
  }

  async componentDidMount () {
    this.props.getMessages()
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    // const { messages } = this.state
    const { messages } = this.props
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
