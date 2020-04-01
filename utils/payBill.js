var bxdList = [{
    // 未提交
    'ID': '0001',
    'Code': 'BX2020021700001',
    'Category': '项目报销',
    'Applyer': 'yangjie',
    'ApplyerName': '杨杰',
    'ProjectCode': 'GC19044',
    'ProjectName': '湖北武汉中原电子产线项目4',
    'WorkOrderCode': 'RWD20200217001',
    'Money': '150',
    'TravelDays': '3',
    'Memo': '项目报销描述',
    'SubmitStatus': 0,
    'SubmitDateTime': '2020-02-16 15:15:15',
    'DptCheckStatus': 0,
    'DptCheckDateTime': '',
    'BillCheckStatus': 0,
    'BillCheckDateTime': '',
    'PayStatus': 0,
    'PayDateTime': '',
  }, {
    // 待检查
    'ID': '0002',
    'Code': 'BX2020021700002',
    'Category': '项目报销',
    'Applyer': 'yangjie',
    'ApplyerName': '杨杰',
    'ProjectCode': 'GC19045',
    'ProjectName': '湖北武汉中原电子产线项目5',
    'WorkOrderCode': 'RWD20200217002',
    'Money': '100',
    'TravelDays': '3',
    'Memo': '项目报销描述',
    'SubmitStatus': 1,
    'SubmitDateTime': '2020-02-16 15:15:15',
    'DptCheckStatus': 0,
    'DptCheckDateTime': '',
    'BillCheckStatus': 0,
    'BillCheckDateTime': '',
    'PayStatus': 0,
    'PayDateTime': '',
  },
  {
    //待审核
    'ID': '0003',
    'Code': 'BX2020021700003',
    'Category': '项目报销',
    'Applyer': 'yangjie',
    'ApplyerName': '杨杰',
    'ProjectCode': 'GC19046',
    'ProjectName': '湖北武汉中原电子产线项目6',
    'WorkOrderCode': 'RWD20200217003',
    'Money': '500',
    'TravelDays': '3',
    'Memo': '项目报销描述',
    'SubmitStatus': 1,
    'SubmitDateTime': '2020-02-16 15:15:15',
    'DptCheckStatus': 1,
    'DptCheckDateTime': '2020-02-16 15:15:15',
    'BillCheckStatus': 0,
    'BillCheckDateTime': '2020-02-17 15:15:15',
    'PayStatus': 0,
    'PayDateTime': '',
  }, {
    //待付款
    'ID': '0004',
    'Code': 'BX2020021700004',
    'Category': '项目报销',
    'Applyer': 'yangjie',
    'ApplyerName': '杨杰',
    'ProjectCode': 'GC19047',
    'ProjectName': '湖北武汉中原电子产线项目7',
    'WorkOrderCode': 'RWD20200217004',
    'Money': '120',
    'TravelDays': '3',
    'Memo': '项目报销描述',
    'SubmitStatus': 1,
    'SubmitDateTime': '2020-02-16 15:15:15',
    'DptCheckStatus': 1,
    'DptCheckDateTime': '2020-02-18 15:15:15',
    'BillCheckStatus': 1,
    'BillCheckDateTime': '2020-02-17 15:15:15',
    'PayStatus': 0,
    'PayDateTime': '',
  }, {
    //已完成
    'ID': '0005',
    'Code': 'BX2020021700005',
    'Category': '项目报销',
    'Applyer': 'yangjie',
    'ApplyerName': '杨杰',
    'ProjectCode': 'GC19048',
    'ProjectName': '湖北武汉中原电子产线项目8',
    'WorkOrderCode': 'RWD20200217008',
    'Money': '600',
    'TravelDays': '3',
    'Memo': '项目报销描述',
    'SubmitStatus': 1,
    'SubmitDateTime': '2020-02-17 15:15:15',
    'DptCheckStatus': 1,
    'DptCheckDateTime': '2020-02-19 15:15:15',
    'BillCheckStatus': 1,
    'BillCheckDateTime': '2020-02-18 15:15:15',
    'PayStatus': 1,
    'PayDateTime': '2020-02-20 15:15:15',
  }, {
    //已完成
    'ID': '0006',
    'Code': 'BX2020021700006',
    'Category': '项目报销',
    'Applyer': 'cuiwenbin',
    'ApplyerName': '崔文斌',
    'ProjectCode': 'GC19049',
    'ProjectName': '湖北武汉中原电子产线项目9',
    'WorkOrderCode': 'RWD20200217006',
    'Money': '100',
    'TravelDays': '3',
    'Memo': '项目报销描述',
    'SubmitStatus': 1,
    'SubmitDateTime': '2020-02-17 15:15:15',
    'DptCheckStatus': 1,
    'DptCheckDateTime': '2020-02-19 15:15:15',
    'BillCheckStatus': 1,
    'BillCheckDateTime': '2020-02-18 15:15:15',
    'PayStatus': 1,
    'PayDateTime': '2020-02-20 15:15:15',
  }, {
    // 未提交
    'ID': '0007',
    'Code': 'BX2020021700001',
    'Category': '任务报销',
    'Applyer': 'yangjie',
    'ApplyerName': '杨杰',
    'ProjectCode': 'GC15018',
    'ProjectName': '武汉统一喷码控制系统',
    'WorkOrderCode': 'RWD20200217001',
    'Money': '150',
    'TravelDays': '3',
    'Memo': '项目报销描述',
    'SubmitStatus': 0,
    'SubmitDateTime': '2020-02-16 15:15:15',
    'DptCheckStatus': 0,
    'DptCheckDateTime': '',
    'BillCheckStatus': 0,
    'BillCheckDateTime': '',
    'PayStatus': 0,
    'PayDateTime': '',
  },


]

const getBxd = (account, page, size, SubmitStatus, BillCheckStatus, DptCheckStatus, PayStatus) => {
  var tmp = [];
  if (account == "") {
    tmp = bxdList
  } else {
    for (let i in bxdList) {

      if (account == bxdList[i].Applyer) {
        if (SubmitStatus === '' && BillCheckStatus === '' && DptCheckStatus === '' && PayStatus === '') {
          tmp = tmp.concat(bxdList[i])

        } else if (SubmitStatus == bxdList[i].SubmitStatus &&
          BillCheckStatus == bxdList[i].BillCheckStatus &&
          DptCheckStatus == bxdList[i].DptCheckStatus &&
          PayStatus == bxdList[i].PayStatus) {
          tmp = tmp.concat(bxdList[i]);

        }

      }
    }
  }

  return tmp;
}

module.exports = {
  getBxd: getBxd,
}