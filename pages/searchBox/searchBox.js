// public/searchBox/searchBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showAdd: {
      type: Boolean,
      value: true,
    },
    showDate: {
      type: Boolean,
      value: true,
    },
    bgcolor: {
      type: String,
      value: '#efeeee',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searchKey: '',
    startDate: '',
    endDate: '',
    startDateInRange: true,
    endDateInRange: true,
  },

  /**
   * 组件的方法列表
   */
  ready() {
    console.log(this.data.showAdd)
    let a = getApp().getlist('zzz')
    console.log(a)
  },
  methods: {
    // this.triggerEvent('select', this.data.showMore);
    searchInput(e) {
      console.log(e)
      this.setData({
        searchKey: e.detail.value
      })
    },
    add() {
      this.triggerEvent('add')
    },
    search() {
      //将数据返回父级
      if (this.data.startDate != '' && this.data.endDate == '') {
        this.setData({
          endDateInRange: false,
        })
        return;
      }
      if (this.data.startDate == '' && this.data.endDate != '') {
        this.setData({
          startDateInRange: false,
        })
        return;
      }


      if (this.data.startDateInRange && this.data.endDateInRange && this.data.searchKey != '') {
        var tmp = {
          searchKey: this.data.searchKey,
          startDate: this.data.startDate,
          endDate: this.data.endDate,
        }
        console.log(tmp)
        this.triggerEvent('search', tmp)
      }

    },
    reset() {
      //重置按钮
      this.setData({
        startDate: '',
        endDate: '',
        searchKey: '',
        startDateInRange: true,
        endDateInRange: true,
      })
      this.triggerEvent('reset');
    },




    startDateChange(e) {
      console.log(e)
      if (this.data.endDate == '') {
        this.setData({
          startDate: e.detail.value,
          startDateInRange: true
        })
      } else {
        if (e.detail.value < this.data.endDate) {
          this.setData({
            startDate: e.detail.value,
            startDateInRange: true
          })
        } else {
          this.setData({
            startDate: "范围有误",
            startDateInRange: false
          })
        }
      }

    },
    endDateChange(e) {
      if (this.data.startDate == '') {
        this.setData({
          endDate: e.detail.value,
          endDateInRange: true
        })
      } else {

        if (e.detail.value > this.data.startDate) {
          this.setData({
            endDate: e.detail.value,
            endDateInRange: true
          })
        } else {
          this.setData({
            endDate: "范围有误",
            endDateInRange: false
          })
        }
      }
    },
  }
})