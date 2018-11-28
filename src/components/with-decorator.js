import Taro from '@tarojs/taro'
import { connect } from '@tarojs/redux'

function withDecorator({}) {
    return function (WrappedComponent) {
        class WrapperComponent extends WrappedComponent {
            constructor(props) {
                // 1. 在小程序中，属性值只会传入被修饰的组件（WrappedComponent）
                // 2. 在 H5 中，属性值会同时传入到被修饰的组件（WrappedComponent）和修饰器生成的组件（WrapperComponent）
                // 3. 在 H5 的 WrapperComponent 中设置默认属性为空，会直接覆盖 WrappedComponent 的属性，需要做如下的兼容处理
                const { extraClass = '' } = props
                const newProps = Object.assign(props, {extraClass})
                // console.log('~~~~~~~~~~newProps :', newProps)
                super(newProps)
            }
            render() {
                return super.render()
            }
        }

        // 组件注入皮肤主题
        WrapperComponent = connect(({ common={} }) => {
            return { theme: common.theme }
        })(WrapperComponent)
        return WrapperComponent
    }
}

export default withDecorator
