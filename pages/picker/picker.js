Page({
  data: {
    multiArray: [['5日','6日','7日'], ['8点', '10点', '12点', '14点', '16点'], ['30分', '0分']],
    multiIndex: [0, 0, 0]
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      //第一列对应的第二列值
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['8点', '10点', '12点', '14点', '16点'];
            data.multiArray[2] = ['30分', '0分'];
            break;
          case 1:
            data.multiArray[1] = ['15点', '20点'];
            data.multiArray[2] = ['30分'];
            break;
          case 2:
            data.multiArray[1] = ['16点', '18点'];
            data.multiArray[2] = ['22分'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      //第二列对应的第三列值  
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['30分', '0分'];
                break;
              case 1:
                data.multiArray[2] = ['20分'];
                break;
              case 2:
                data.multiArray[2] = ['30分', '50分'];
                break;
              case 3:
                data.multiArray[2] = ['15分', '09分', '45分'];
                break;
              case 4:
                data.multiArray[2] = ['30分', '35分', '45分', '50分'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['30分'];
                break;
              case 1:
                data.multiArray[2] = ['50分'];
                break;
            }
            break;
          case 2:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['22分'];
                break;
              case 1:
                data.multiArray[2] = ['33分'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  }
})