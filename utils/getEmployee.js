var employeeList = getApp().globalData.AllEmployee

const getEmployeeInfo = (searchCode) => {
  for (var i in employeeList) {
    if (searchCode == employeeList[i].Code) {
      var tmp = {
        'Code': employeeList[i].Code,
        'Name': employeeList[i].Name,
        'AvatarUrl': employeeList[i].AvatarUrl,
        'DepartmentName': employeeList[i].DepartmentName,
        'Mobile': employeeList[i].Mobile,
        'CorpEMail': employeeList[i].CorpEMail,
      }
      return tmp;
    }
  }

}
module.exports = {
  getEmployeeInfo: getEmployeeInfo,
}