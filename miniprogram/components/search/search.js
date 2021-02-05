let keyword = ''
Component({
  properties: {
    placeholder:{
      type:String,
      value:'请输入关键字'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput(event){
      keyword = event.detail.value
    },
    onFocus(event){
      this.setData({
        inputValue:'',
      })
    },
    onSearch(event){
      console.log(keyword)
      this.triggerEvent('search',{
        keyword,
      })
    }
  }
})
