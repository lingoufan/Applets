let keyword = ''

Page({
  data: {
  },
  onSearch(event){
    keyword = event.detail.keyword
    console.log(keyword)
  },
  onPublish(){
    wx.navigateTo({
      url: '../publish/publish',
    })
  },
   onLoad() {}
})
