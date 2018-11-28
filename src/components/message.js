import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"

import withDecorator from "./with-decorator"
@withDecorator({})
export default class Message extends Component {
    render() {
        return (
            <View
              className={`cell ${this.props.extraClass}`}
            >
                {this.props.children}
            </View>
        )
    }
  }
