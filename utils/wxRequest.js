function post(promise) {
  let APIURL = 'https://qf-cloud.cn/';
  //每个接口都带上账号密码
  var tmpData = {
    'LoginCode': getApp().globalData.Code,
    'Password': getApp().globalData.Password
  }

  var sendData = extend(promise.data, tmpData)

  console.log(sendData)
  return new Promise(function(resolve, reject) {
    wx.request({
      url: APIURL,
      data: sendData,
      method: 'Post',
      success(res) {
        //跟服务器通信是否正常
        if (res.statusCode === 200) {
          //接口返回数据的状态码判断
          if (res.data.ErrMsg === '200') {
            //返回接口的正常数据
            resolve(res.data);
          } else {
            //显示接口返回的错误信息
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1500
            });
            resolve(res.data.ErrMsg);
          }
        } else {
          wx.showToast({
            title: "网络异常",
            icon: 'none',
            duration: 1500
          });
          resolve('400');
        }
      },
      fail(e) {
        console.log(e)
        wx.showToast({
          title: "网络异常",
          icon: 'none',
          duration: 1500
        });
        resolve('400')
      }
    });
  })
}

function extend(data, dataExtend) {
  var res = {};
  for (var key in data) {
    res[key] = data[key];
  }
  for (var key in dataExtend) {
    res[key] = dataExtend[key];
  }
  return res;
}
module.exports = {
  post: post,
}