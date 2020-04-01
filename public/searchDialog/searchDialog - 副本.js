// public/searchDialog/searchDialog.js

const allData = require('../../utils/member.js')
const allPrjData = require('../../utils/project.js')
const allCustomer = require('../../utils/customer.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Category: {
      type: String,
      value: 'employee'
    },
    filter: {
      type: Boolean,
      value: false,
    },
    showDialog: {
      type: Boolean,
      value: false
    },
    personal: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showCorp:false,
    CropID: '',
    projectType: '',
    projectCode: '',
    showItem: [],
    input_searchkey: '',
    DepartmentList: [],
    EmployeeList: [],
    CompanyList: [],
    ProjectList: [],
    WorkOrderList: [],
    CustomerList: [],
  },

  ready() {
    console.log('----' + this.data.Category == 'company')
    if (this.data.Category == 'employee') {
      var tmp = allData.getMemberList()
      if (this.data.filter) {
        for (let i in tmp) {
          if (tmp[i].Code == getApp().globalData.Code)
            tmp.splice(i, 1)
          break;
        }
      }
      this.setData({
        EmployeeList: tmp
      })
      console.log("employee" + this.data.EmployeeList)
      this.searchEmp();

    } else if (this.data.Category == 'department') {
      var tmp = [{
        "ID": "0001",
        "Name": "研发部"
      }, {
        "ID": "0002",
        "Name": "综管部"
      }, {
        "ID": "0003",
        "Name": "市场部"
      }, {
        "ID": "0004",
        "Name": "工程部"
      }, {
        "ID": "0005",
        "Name": "售后部"
      }]
      for (let i in tmp) {
        if (tmp[i].Name == getApp().globalData.DepartmentName)
          tmp.splice(i, 1)
        break;
      }
      this.setData({
        DepartmentList: tmp
      })
      this.searchDpt();
    } else if (this.data.Category == 'company') {
      var tmp = [{
        "ID": "0001",
        "Name": "上海千帆科技股份有限公司"
      }, {
        "ID": "0002",
        "Name": "苏州启成精密工业有限公司"
      }]

      this.setData({
        CompanyList: tmp
      })
      this.searchCorp();
    } else if (this.data.Category == 'project') {
      console.log("进入项目")
      this.getPrj();
      // this.searchCorp();
    } else if (this.data.Category == 'customer') {
      console.log("搜索框进入客户")
      this.getCustomer();
    }


  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectProject(){
      console.log('搜索项目')
      // this.
    },
    selectCustomer(){
      console.log('搜索客户')
      this.getCustomer();
    },
    selectEmployee() {
      console.log('搜索用户')
      var tmp = allData.getMemberList()
      this.setData({
        EmployeeList:tmp,
        Category: 'employee'
      })

      this.searchEmp()
    },

    changeCateGory(e) {
      this.setData({
        Category: e
      })
      if (e == 'company') {
        this.searchCorp()
      } else if (e == 'project') {
        this.searchPrj()
      } else if (e == 'workOrder') {
        this.searchWorkOrder()
      }
    },
    changeCompany(e) {
      /**
       * 父组件调用，改变了公司编号，
       */
      console.log("改变公司ID" + e)
      this.setData({
        CorpID: e,
        Category: 'company'
      })

    },
    changePrjType(e) {
      /**
       * 父组件调用，改变了项目类型，进行该类型项目搜索
       */
      console.log("改变项目类型" + e)
      this.setData({
        projectType: e,
        Category: 'project'
      })
      if (e == '部门任务') {
        this.getWorkOrder();
      } else {
        this.getPrj();
      }

    },

    changePrjCode(e) {
      /**
       * 父组件调用，改变了项目编号，进行该项目编号下搜索任务单
       */
      this.setData({
        ProjectCode: e,
        Category: 'workOrder'
      })
      this.getWorkOrder();
    },
    getWorkOrder() {
      //获取去项目下的任务单，或者直接获取部门任务单：根据projectType定
      var tmp = [{
        "ID": '0001',
        "WorkOrderCode": 'RWD0000000001'
      }, {
        "ID": '0002',
        "WorkOrderCode": 'RWD0000000002'
      }]
      if (this.data.projectType == "部门任务") {
        //部门任务没有项目编号

      } else {

      }

      this.setData({
        WorkOrderList: tmp
      })
      // this.searchWorkOrder();
    },
    getCustomer() {
      this.setData({
        CustomerList: allCustomer.getCustomer()
      })
      this.searchCustomer();
    },
    getPrj() {
      //先获取到公司ID下的项目
      this.setData({
        ProjectList: allPrjData.getProject()
      })
      // this.searchPrj();
    },


    bindSelect(e) {
      console.log(e.target.dataset.name)
      this.triggerEvent('dialogSelect', JSON.stringify(e.target.dataset.name));
      this.setData({
        input_searchkey: ''
      })
    },
    serachDialogHide() {
      this.setData({
        input_searchkey: ''
      })
      this.triggerEvent('hideDialog');
    },

    inputChange(e) {
      this.setData({
        input_searchkey: e.detail.value,
      })
      if (this.data.Category == 'department') {
        this.searchDpt();
      } else if (this.data.Category == 'employee') {
        this.searchEmp();
      } else if (this.data.Category == 'company') {
        this.searchCorp();
      } else if (this.data.Category == 'project') {
        this.searchPrj();
      } else if (this.data.Category == 'workOrder') {
        this.searchWorkOrder();
      } else if (this.data.Category == 'customer') {
        this.searchCustomer();
      }


    },
    searchCustomer() {
      var that = this;
      var val = this.data.input_searchkey;
      var data = this.data.CustomerList;
      var tmp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].CorpName.indexOf(val) != -1) {
          tmp.push(data[i])
        }
      }
      this.getHilightWord(tmp, that.data.input_searchkey, 'customer');
      console.log(tmp)
    },
    searchWorkOrder() {
      var that = this;
      var val = this.data.input_searchkey;
      var data = this.data.WorkOrderList;
      var tmp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].WorkOrderCode.indexOf(val) != -1) {
          tmp.push(data[i])
        }
      }
      this.getHilightWord(tmp, that.data.input_searchkey, 'workOrder');
      console.log(tmp)
    },
    searchPrj() {
      var that = this;
      var val = this.data.input_searchkey;
      var data = this.data.ProjectList;
      var tmp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].ProjectCode.indexOf(val) != -1 || data[i].ProjectName.indexOf(val) != -1) {
          tmp.push(data[i])
        }
      }
      this.getHilightWord(tmp, that.data.input_searchkey, 'project');
      console.log(tmp)
    },

    searchCorp() {
      //筛选公司
      var that = this;
      var val = this.data.input_searchkey;
      var data = this.data.CompanyList;
      var tmp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].Name.indexOf(val) != -1) {
          tmp.push(data[i])
        }
      }
      this.getHilightWord(tmp, that.data.input_searchkey, 'company');
      console.log(tmp)
    },
    searchDpt() {
      //筛选部门
      var that = this;
      var val = this.data.input_searchkey;
      var data = this.data.DepartmentList;
      var tmp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].Name.indexOf(val) != -1) {
          tmp.push(data[i])
        }
      }
      this.getHilightWord(tmp, that.data.input_searchkey, 'department');
      console.log(tmp)
    },
    searchEmp() {
      //筛选职员
      var that = this;
      var val = this.data.input_searchkey;

      var data = this.data.EmployeeList;
      var tmp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].Name.indexOf(val) != -1) {
          tmp.push(data[i])
        }
      }
      this.getHilightWord(tmp, that.data.input_searchkey, 'employee');
      console.log(tmp)
    },
    getHilightWord(tmpData, tmpKey, type) {
      //高亮数据存储
      var that = this;
      var value = tmpKey;
      var data = tmpData;
      var tmp = [];
      if (type == 'department') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'ID': data[i].ID,

            'Name': data[i].Name,
            'title': that.hilight_word(value, data[i].Name)
          };
        }
        that.setData({
          showItem: tmp
        })
      } else if (type == 'employee') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'ID': data[i].ID,
            'Code': data[i].Code,
            'Name': data[i].Name,
            'title': that.hilight_word(value, data[i].Name)
          };
        }
        that.setData({
          showItem: tmp
        })
      } else if (type == 'company') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'CorpID': data[i].ID,
            'CorpName': data[i].Name,
            'title': that.hilight_word(value, data[i].Name)
          };
        }
        that.setData({
          showItem: tmp
        })
      } else if (type == 'project') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'ProjectCode': data[i].ProjectCode,
            'text': data[i].ProjectCode + '-' + data[i].ProjectName,
            'title': that.hilight_word(value, data[i].ProjectCode + '-' + data[i].ProjectName)
          };
        }

        that.setData({
          showItem: tmp
        })

      } else if (type == 'workOrder') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'ID': data[i].ID,
            'WorkOrderCode': data[i].WorkOrderCode,
            'title': that.hilight_word(value, data[i].WorkOrderCode)
          };
        }
        that.setData({
          showItem: tmp
        })
      } else if (type == 'customer') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'ID': data[i].ID,
            'CorpName': data[i].CorpName,
            'title': that.hilight_word(value, data[i].CorpName)
          };
        }
        that.setData({
          showItem: tmp
        })
      }


    },
    hilight_word: function(key, word) {
      //分割需要高亮的字符串
      if (key.length == 0) {
        return [{
          key: false,
          str: word
        }];
      }
      let idx = word.indexOf(key),
        t = [];

      if (idx > -1) {
        if (idx == 0) {
          t = this.hilight_word(key, word.substr(key.length));
          t.unshift({
            key: true,
            str: key
          });
          return t;
        }

        if (idx > 0) {
          t = this.hilight_word(key, word.substr(idx));
          t.unshift({
            key: false,
            str: word.substring(0, idx)
          });
          return t;
        }
      }
      return [{
        key: false,
        str: word
      }];
    },
    bindShowCorp() {
      this.setData({
        showCorp: !this.data.showCorp
      })
      console.log(this.data.showCorp)
    }
  },
 
})