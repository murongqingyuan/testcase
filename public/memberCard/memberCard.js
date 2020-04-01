// public/memberCard/memberCard.js
const getEmployee = require("../../utils/getEmployee.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    memberId: {
      type: String,
      value: ''
    },
    memberJson: {
      type: JSON,
      value: {}
    },
    BigCard: {
      type: Boolean,
      value: true,
    }
  },

  ready() {

    var _this = this;
    var Size = 7;
    var waitTime = 0;
    waitTime = (this.data.vIndex % 100) * parseInt(this.data.vIndex)
    setTimeout(function() {
      _this.setData({
        showItem: true
      })

    }, waitTime)

    setTimeout(function() {
    
      _this.setData({
        Employee: getEmployee.getEmployeeInfo(_this.data.memberJson.Code)
      })
    }, 100)

  },
  /**
   * 组件的初始数据
   */
  data: {
    showItem: false,
    Employee: {},
  },

onload(){
  console.log(11111111111111)
  console.log(this.data)
},
  /**
   * 组件的方法列表
   */
  methods: {
    imageError(e) {
      var Employee = this.data.Employee
      Employee.AvatarUrl = '../../images/user_unknown.png'
      this.setData({
        Employee
      })
    },

    jumpToEdit() {
      wx.navigateTo({
        url: '../../../pages/member/addMember/addMember?add=false&editInfo=' + JSON.stringify(this.data.memberJson),
      })
    },
    //感觉不需要员工明细界面了
    jumpToDetail() {
      wx.navigateTo({
        url: '../../../pages/detail/detailMember/detailMember?memberInfo=' + JSON.stringify(this.data.memberJson),
      })
    }
  }
})