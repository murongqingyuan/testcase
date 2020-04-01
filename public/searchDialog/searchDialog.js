// public/searchDialog/searchDialog.js

const allData = require('../../utils/member.js')
const allPrjData = require('../../utils/project.js')
const allCustomer = require('../../utils/customer.js')
const wxRequest = require('../../utils/wxRequest.js')
const allWorkOrer = require('../../utils/workOrder.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // Category: {
    //   type: String,
    //   value: 'employee'
    // },
    // filter: {
    //   type: Boolean,
    //   value: false,
    // },
    showDialog: {
      type: Boolean,
      value: false
    },
    // personal: {
    //   type: Boolean,
    //   value: false
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    Category: '',
    GetID: '',
    filter: '',
    personal: '',
    showInitCorp: false,
    InitCorpID: '', //搜索内容的公司ID
    InitCorpName: '', //搜索内容的公司名称
    ProjectType: '', //项目类型：Projects-工程项目/SaleProjects-销售项目/RepairProjects-维修项目/CorpProjects-公司项目
    WorkOrderType: '', //任务单类型：ProjectWorkOrder-工程任务/CorpWorkOrder-公司任务/DptWorkOrder-部门任务，
    Usage: '', //用途PayBill/WorkDaily

    CropID: '',
    projectType: '',
    projectCode: '',
    showCorpItem: [],
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
    //先初始化搜索内容的公司
    this.initCorp()

  },

  /**
   * 组件的方法列表
   */
  methods: {

    initCorp() {
      //从globalData中拿到当前用户的公司为默认公司
      var tmpCorpID = getApp().globalData.companyID
      //请求后台获取到公司列表
      this.getCompanyList();
    },
    bindShowCorp() {
      this.setData({
        showInitCorp: !this.data.showInitCorp
      })
      console.log(this.data.showInitCorp)
    },

    /***********************************************************/
    getCompanyList() {
      var tmp = [{
        "ID": "0001",
        "Name": "上海千帆科技股份有限公司"
      }, {
        "ID": "0002",
        "Name": "苏州启成精密工业有限公司"
      }]
      //这里是否可以做成全局的，刷新之后更新全局内容
      this.setData({
        CompanyList: tmp
      })
    },
    getEmployeeList() {
      //获取公司成员列表，将显示内容替换为公司成员
      var tmp = allData.getMemberList()
      this.setData({
        EmployeeList: tmp,
      })
      this.searchEmployee()
    },
    getProjectList(category) {
      //获取公司项目列表，将显示内容替换为公司项目
      //根据ProjectType、InitCorpID进行不同的搜索，二选一?

      // var tmp = {
      //   'Type': 'GetAllProjectsList_Per',
      //   'ProjectType': category // Projects SaleProjects RepairProjects CorpProjects
      // }
      // var callBack = wxRequest.post(tmp);
      var tmp = allData.getMemberList()
      this.setData({
        ProjectList: allPrjData.getProject()
      })
      this.searchProject()
    },
    getWorkOrderList(type, code, usage) {
      //获取公司任务列表，将显示内容替换为公司项目
      //根据WorkOrderType、Usage进行不同的搜索
      var tmp = {
        'Type': 'GetAllWorkOrder_Project',
        'ProjectCode': code,
        'Category': type, //DptWorkOrder / CorpWorkOrder / ProjectWorkOrder
        'Usage': usage, //  PayBill / WorkDaily
      }
      console.log(tmp)

      this.setData({
        WorkOrderList: allWorkOrer.getWorkOrder()
      })
      this.searchWorkOrder()
    },
    getDepartmentList() {
      // var tmp = {
      //   'Type': 'GetDepartmentList',
      // }
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

      if (this.data.filter) {
        //将返回结果筛除自己相关
        for (let i in tmp) {
          if (tmp[i].Name == getApp().globalData.DepartmentName)
            tmp.splice(i, 1)
          break;
        }
      }
      this.setData({
        DepartmentList: tmp
      })
      this.searchDepartment();
    },

    /**********************************************************************/
    //指定是哪个地方来的，父组件有多个地方调用searchDialog的话，根据返回值判断填写哪一个
    selectGetID(e) {
      this.setData({
        GetID: e
      })
    },
    selectFilter() {
      this.setData({
        filter: true
      })
    },
    selectInitCorp(e) {
      //选定默认公司，根据公司ID搜索其他内容
      this.setData({
        InitCorpID: e.target.dataset.info.ID,
        InitCorpName: e.target.dataset.info.Name,
        showInitCorp: false,
      })
      if (this.data.Category == 'employee') {
        this.getEmployeeList()
      }
    },
    selectProject() {
      //父组件调用：修改搜索类型为 project
      this.setData({
        Category: 'project'
      })
      this.getProjectList()
    },
    selectWorkOrder() {
      //父组件调用：修改搜索类型为 workOrder
      this.setData({
        Category: 'workOrder'
      })
    },
    selectDepartment() {
      //父组件调用：修改搜索类型为 department
      this.setData({
        Category: 'department'
      })
      this.getDepartmentList()
    },
    selectEmployee() {
      //父组件调用：修改搜索类型为 employee
      console.log('搜索公司成员')
      this.setData({
        Category: 'employee'
      })
      this.getEmployeeList()
    },

    selectCustomer() {
      //父组件调用：修改搜索类型为 customer
      console.log('搜索客户')
      this.setData({
        Category: 'customer'
      })

      this.getCustomer();
    },

    // changeProjectType(e) {
    //   //父组件调用：修改搜索项目类型为 e:Projects-工程项目/SaleProjects-销售项目/RepairProjects-维修项目/CorpProjects-公司项目
    //   this.setData({
    //     ProjectType: e
    //   })
    //   this.getProjectList()
    // },
    changeWorkOrderType(e, usage) {
      console.log(e)
      if (usage == 'WorkOrder') {
        //父组件调用：修改搜索任务单类型为 e:ProjectWorkOrder-工程项目任务/CorpWorkOrder-公司项目任务/DptWorkOrder-部门任务
        //如果是工程项目任务或者公司项目任务，需要搜索项目，部门任务直接搜索任务
        this.setData({
          WorkOrderType: e
        })
        if (e == 'ProjectWorkOrder' || e == 'CorpWorkOrder') {
          var tmp = e == 'ProjectWorkOrder' ? 'Projects' : 'CorpProjects'
          this.getProjectList(e) //Projects or CorpProjects
        } else if (e == 'DptWorkOrder') {
          this.getWorkOrderList(e, '', usage)
        }
      } else if (usage == 'PayBill') {
        this.getProjectList(e) //Projects/SaleProjects/RepairProjects/CorpProjects
      }


    },




    changeCateGory(e) {
      this.setData({
        Category: e
      })
      if (e == 'company') {
        this.searchCorp()
      } else if (e == 'project') {
        this.searchProject()
      } else if (e == 'workOrder') {
        this.searchWorkOrder()
      }
    },

    getCustomer() {
      this.setData({
        CustomerList: allCustomer.getCustomer()
      })
      this.searchCustomer();
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
        this.searchDepartment();
      } else if (this.data.Category == 'employee') {
        this.searchEmployee();
      } else if (this.data.Category == 'company') {
        this.searchCorp();
      } else if (this.data.Category == 'project') {
        this.searchProject();
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
        if (data[i].Code.indexOf(val) != -1) {
          tmp.push(data[i])
        }
      }
      this.getHilightWord(tmp, that.data.input_searchkey, 'workOrder');
      console.log(tmp)
    },
    searchProject() {
      var that = this;
      var val = this.data.input_searchkey;
      var data = this.data.ProjectList;
      var tmp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].Code.indexOf(val) != -1 || data[i].Name.indexOf(val) != -1) {
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
    searchDepartment() {
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
    searchEmployee() {
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
    /********************************************************************************** */
    getHilightWord(tmpData, tmpKey, type) {
      //高亮数据存储
      var that = this;
      var value = tmpKey;
      var data = tmpData;
      var tmp = [];
      if (type == 'department') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'GetID': this.data.GetID,
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
            'GetID': this.data.GetID,
            'ID': data[i].ID,
            'Code': data[i].Code,
            'Name': data[i].Name,
            'AvatorUrl':data[i].AvatorUrl,
            'title': that.hilight_word(value, data[i].Name)
          };
        }
        that.setData({
          showItem: tmp
        })
      } else if (type == 'company') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'GetID': this.data.GetID,
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
            'GetID': this.data.GetID,
            'Code': data[i].Code,
            'text': data[i].Code + '-' + data[i].Name,
            'title': that.hilight_word(value, data[i].Code + '-' + data[i].Name)
          };
        }

        that.setData({
          showItem: tmp
        })
        console.log("showItem", this.data.showItem)

      } else if (type == 'workOrder') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'GetID': this.data.GetID,
            'ID': data[i].ID,
            'Code': data[i].Code,
            'title': that.hilight_word(value, data[i].Code)
          };
        }
        that.setData({
          showItem: tmp
        })
      } else if (type == 'customer') {
        for (let i = 0; i < data.length; i++) {
          tmp[i] = {
            'GetID': this.data.GetID,
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

  },

})