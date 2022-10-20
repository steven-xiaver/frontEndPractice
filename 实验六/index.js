
const color = {
    DATA_1_COLOR:"red",
    DATA_2_COLOR:"pink",
    DATA_3_COLOR:"blue",
    DATA_4_COLOR:"yellow",
}

function Data(name, value) {
    this.name = name;
    this.value = value;
}
function getAllData() {
    
    let datas = [];
    let items = document.querySelectorAll(".form .item");
    for(let i = 0; i < items.length; i++){
        let dataGroup = items[i].querySelectorAll("label input");
        let name = dataGroup[0].value;
        let value = parseInt(dataGroup[1].value);
        if(name === ""){
            alert("数据错误");
            return null;
        }
        if(value !==  value) {
            alert("数据错误");
            return null;
        }
        datas.push(new Data(name, value));
    }
    return datas;
}

function randerZhu() {
    let datas = getAllData();
    let can = document.querySelector("canvas");
    let cxt = can.getContext("2d");
    let sum = 0;
    if(datas === null) {
        return;
    }
    console.log(datas.length);
    for(let i = 0; i < datas.length; i++) {
        sum+=datas[i].value;
    }
    for(let i = 0; i < datas.length; i++) {
        
        cxt.fillStyle = color["DATA_"+i+"_COLOR"];
        let hight = 500 * (datas[i].value / sum);
        cxt.fillRect(600-hight, 100*i, 50, hight);
    }
}

function randerBing() {

}

function clear() {

}

(function() {
    console.log("asd");
    document.querySelector(".zhu").addEventListener("click", randerZhu);
})();