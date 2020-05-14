let arr = [
    {"type":"TPOD"},
    {"type":"TPOD"},
    {"type":"TPOD"},
    {"type":"TPOD"},
    {"type":"TPOD"},
    {"type":"TPOD"},
    {"type":"TPOD1"},
    {"type":"TPOD1"},
    {"type":"TPOD1"},
    {"type":"TPOD2"},
    {"type":"TPOD2"},
    {"type":"TPOD3"},
    {"type":"TPOD3"},
    {"type":"TPOD3"},
]

// [{type:"TPOD",num:6},{type:"TPOD1",num:1}]

function change(arr){
    let dataArr = []
    let typeArr = []
    let dataObj = {}
    let arrLen = arr.length
    for(let i=0;i<arrLen;i++){
        // 先找出有几种类型
        typeArr.push(arr[i].type)
    }
    // 对收集的到的数据进行去重
    let newArr = [...new Set(typeArr)]
    for(let i=0;i<newArr.length;i++){
        dataObj = {}
        for(let j=0;j<arrLen;j++){
            if(newArr[i] === arr[j].type){
                if(dataObj.type){
                    dataObj.num++
                }else{
                    dataObj.type = newArr[i]
                    dataObj.num = 1
                }
            }
        }
        dataArr.push(dataObj)
    }
    return dataArr
}

console.log(change(arr))

// npm install --save codemirror;