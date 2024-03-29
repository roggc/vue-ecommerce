import store from './store'
import Paginationx from './paginationx'
import Cartx from './cartx'
import Wishx from './wishx'

export default store({
  init(this_){
    this_.state={
      paginationx:new Paginationx(),
      cartx:new Cartx(),
      wishx:new Wishx(),
      products:[],
      width:300,
      height:200,
      limit:6,
      offset:0,
      indexCart:[],
      miniBagItems:[],
      indexWish:[]
    }
    this_.state.paginationx.commit({type:'init'})
    this_.state.cartx.commit({type:'init'})
    this_.state.wishx.commit({type:'init'})
  },
  addedToCart(this_,data){
    this_.state.products[data.val].addedToCart=true
  },
  setOffset(this_,data){
    this_.state.offset=data.val
  },
  addIndexCart(this_,data){
    this_.state.indexCart.push(data.val)
  },
  addItemToMiniBag(this_,data){
    this_.state.miniBagItems.push(data.val)
  },
  removeItemFromMiniBag(this_,data){
    this_.state.miniBagItems.splice(data.val,1)
    this_.state.products[data.addedToCart].addedToCart=false
    this_.state.indexCart=this_.state.indexCart.filter(index=>{
      if(index===data.indexCart){
        return false
      }
      return true
    })
  },
  addIndexWish(this_,data){
    this_.state.indexWish.push(data.val)
  },
  removeIndexWish(this_,data){
    this_.state.indexWish=this_.state.indexWish.filter(index=>{
      if(index===data.val){
        return false
      }
      return true
    })
  }
})
