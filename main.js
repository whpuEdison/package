import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import { ConfigProvider, Button, Icon, Form, FormModel, Row, Col, Input, Spin, message, Select, Divider, DatePicker, Cascader, Modal, Popover, Drawer, Card, Table, Breadcrumb, Checkbox } from 'ant-design-vue'
import './assets/less/index.less'
import VueLazyload from 'vue-lazyload'
import Vcolorpicker from 'vcolorpicker'
// Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(VueLazyload)
Vue.use(Vcolorpicker)
Vue.use(Modal)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Select.OptGroup.name, Select.OptGroup)
Vue.component(ConfigProvider.name, ConfigProvider)
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(FormModel.name, FormModel)
Vue.component(FormModel.Item.name, FormModel.Item)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Input.name, Input)
Vue.component(Spin.name, Spin)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Modal.name, Modal)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Cascader.name, Cascader)
Vue.component(Divider.name, Divider)
Vue.component(Popover.name, Popover)
Vue.component(Drawer.name, Drawer)
Vue.component(Card.name, Card)
Vue.component(Table.name, Table)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Checkbox.Group.name, Checkbox.Group)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$warning = Modal.warning
Vue.prototype.$message = message

// 项目 https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=1766231
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1766231_ibumvwe36n.js'
})

Vue.component(IconFont.name, IconFont)

message.config({
    top: '60px',
    duration: 1.5
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// dev分支添加内容
// feature 新增内容
