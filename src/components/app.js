import Vue from 'vue'
import s from 'vue-styled-components'
import ECommerce from './eCommerce'

export default Vue.extend({
  name:'myApp',
  render(){
    const Div=s.div`
    height:100%;
    `
    const el=
    <Div>
    <ECommerce/>
    </Div>
    return el
  }
})
