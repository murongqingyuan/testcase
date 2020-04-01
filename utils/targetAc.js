var dptTargetAcList = [{

  'ID': '0001',
  'CorpID': '0001',
  'Category': '项目结算指标',
  'TargetValue': '1000',
  'ProjectCode': 'GC19041',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567891',
  'Employee': 'yangjie',
  'EmployeeName': '杨杰',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {
  'ID': '0002',
  'CorpID': '0001',
  'Category': '任务指标',
  'TargetValue': '2000',
  'ProjectCode': 'GC19042',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567892',
  'Employee': 'yangjie',
  'EmployeeName': '杨杰',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {

  'ID': '0003',
  'CorpID': '0001',
  'Category': '任务部门纳税',
  'TargetValue': '3000',
  'ProjectCode': 'GC19043',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567893',
  'Employee': 'lipeiming',
  'EmployeeName': '李培铭',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {

  'ID': '0004',
  'CorpID': '0001',
  'Category': '任务公司纳税',
  'TargetValue': '4000',
  'ProjectCode': 'GC19044',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567894',
  'Employee': 'cuiwenbin',
  'EmployeeName': '崔文斌',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {

  'ID': '0005',
  'CorpID': '0001',
  'Category': '项目结算部门纳税',
  'TargetValue': '5000',
  'ProjectCode': 'GC19044',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567894',
  'Employee': 'cuiwenbin',
  'EmployeeName': '崔文斌',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, {

  'ID': '0006',
  'CorpID': '0001',
  'Category': '项目结算公司纳税',
  'TargetValue': '6000',
  'ProjectCode': 'GC19044',
  'ProjectName': '项目的名称啊啊啊啊啊',
  'WorkOrderCode': 'RWD1234567894',
  'Employee': 'cuiwenbin',
  'EmployeeName': '崔文斌',
  'DepartmentID': '0001',
  'DateTime': '2020-03-05 22:22:22'

}, ]
const getDptTargetAc = () => {
  return dptTargetAcList;
}

module.exports = {

  getDptTargetAc: getDptTargetAc

}