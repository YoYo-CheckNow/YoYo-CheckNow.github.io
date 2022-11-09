var yourAnswer = new Array;
var paperLink = ['2022年06月六级真题(第1套)',
                '2021年12月六级真题(第1套)',
                '2021年06月六级真题(第1套)',
                '2020年12月六级真题(第1套)',
                '2020年09月六级真题(第1套)',
                '2019年12月六级真题(第1套)', 
                '2022年06月四级真题(第1套)',
                '2021年12月四级真题(第1套)',
                '2021年06月四级真题(第1套)',
                '2020年12月四级真题(第1套)',
                '2020年09月四级真题(第1套)',
                '2019年12月四级真题(第1套)']



function start() {
    if (document.getElementById("testPaper").selectedIndex == 0) {
        alert('请先选择试题！'); //如果未选择试题，弹出提示       
    } else {
        radiobtnEnable(1);
        document.getElementById('btnStart').disabled = true; //禁用开始按钮
        document.getElementById('btnPause').disabled = false; //启用暂停按钮
        document.getElementById("btnFinish").disabled = false; //启用结束考试按钮        
        timeControll(1);
    }
}

function paperChoice(){
    if (document.getElementById("testPaper").selectedIndex == 0) {
        alert('请先选择试题！'); //如果未选择试题，弹出提示       
    } else {
        document.getElementById("paperNO").src = paperLink[document.getElementById("testPaper").selectedIndex -1]+'.pdf';
        document.getElementById("listening").src = paperLink[document.getElementById("testPaper").selectedIndex -1]+'.mp3';
        document.getElementById("audioLeft").innerHTML = paperLink[document.getElementById("testPaper").selectedIndex -1]+'听力音频';
    }  
}

var testTime = 0;
var timeID;
//考试时间记录
function timeControll(flag) {
    if (flag == 1) {
        timeID = setInterval(function() {
                this.testTime++;
                var day = Math.floor(testTime / (60 * 60 * 24)); //求相差的天数
                var hours = Math.floor(testTime % (60 * 60 * 24) / (60 * 60)); //求相差的小时数
                hours = hours < 10 ? "0" + hours : hours;
                var minutes = Math.floor(testTime % (60 * 60) / 60); //求相差的分钟数
                minutes = minutes < 10 ? "0" + minutes : minutes;
                var seconds = testTime % 60; //求相差的秒数
                seconds = seconds < 10 ? "0" + seconds : seconds;
                document.getElementById('textTime').value = hours + ":" + minutes + ":" + seconds;
            }, 1000) //每秒获取一次当前时间，并与time1求差值，最后计算出分钟和秒，显示在考试用时文本框        
    } else {
        clearInterval(timeID);
    }
}

function showE_O(index){
    if(index+1 >25 && index+1 < 46){
        document.getElementById("E_O").hidden=false;  
    } else{
        document.getElementById("E_O").hidden=true; 
    }
    
}
//上一题下一题按钮
function selectedIndexChange(symbol) {
    var question = document.getElementById("questionNO");
    var index = question.selectedIndex;    
    if (symbol == '+') {
        index++;
        if (index < document.getElementById("questionNO").length) {
            question.options[index].selected = true;
            selectChange();
            // setTimeout(() => optionsUnchecked(), 500) //延时0.5秒取消radio button的被选中状态
        } else {
            alert('已经是最后一题了！');
        }
    } else {
        index--;
        if (index < 0) {
            alert('已经是第一题了！');
        } else {
            question.options[index].selected = true;
            selectChange();
        }
    }
}

function selectChange() {
    var question = document.getElementById("questionNO");
    var index = question.selectedIndex;
    showE_O(index);
    if (yourAnswer[index] != undefined) {
        optionsChecked(yourAnswer[index]);
        // console.log(yourAnswer[index]);
    } else {
        optionsUnchecked();
    }

}

//让选项按钮取消被选中
function optionsUnchecked() {
    document.getElementById("A").checked = false;
    document.getElementById("B").checked = false;
    document.getElementById("C").checked = false;
    document.getElementById("D").checked = false;
    document.getElementById('E').checked = false;
    document.getElementById('F').checked = false;
    document.getElementById('G').checked = false;
    document.getElementById('H').checked = false;
    document.getElementById('I').checked = false;
    document.getElementById('J').checked = false;
    document.getElementById('K').checked = false;
    document.getElementById('L').checked = false;
    document.getElementById('M').checked = false;
    document.getElementById('N').checked = false;
    document.getElementById('O').checked = false;
    
}
//让选项按钮被选中
function optionsChecked(checkedFlag) {
    // alert(checkedFlag);
    switch (checkedFlag) {
        case "A":
            document.getElementById("A").checked = true;
            break;
        case "B":
            document.getElementById("B").checked = true;
            break;
        case "C":
            document.getElementById("C").checked = true;
            break;
        case "D":
            document.getElementById("D").checked = true;
            break;
        case "E":
            document.getElementById("E").checked = true;
            break;
        case "F":
            document.getElementById("F").checked = true;
            break;
        case "G":
            document.getElementById("G").checked = true;
            break;
        case "H":
            document.getElementById("H").checked = true;
            break;
        case "I":
            document.getElementById("I").checked = true;
            break;
        case "J":
            document.getElementById("J").checked = true;
            break;
        case "K":
            document.getElementById("K").checked = true;
            break;
        case "L":
            document.getElementById("L").checked = true;
            break;
        case "M":
            document.getElementById("M").checked = true;
            break;
        case "N":
            document.getElementById("N").checked = true;
            break;
        case "O":
            document.getElementById("O").checked = true;
            break;
        case "未作答":
            optionsUnchecked();
            break;
        case "undefined":
            optionsUnchecked();
            break;
    }
}

//radio button按钮禁用和启用
function radiobtnEnable(enabletag) {
    if (enabletag == 1) {
        document.getElementById('A').disabled = false;
        document.getElementById('B').disabled = false;
        document.getElementById('C').disabled = false;
        document.getElementById('D').disabled = false;
        document.getElementById('E').disabled = false;
        document.getElementById('F').disabled = false;
        document.getElementById('G').disabled = false;
        document.getElementById('H').disabled = false;
        document.getElementById('I').disabled = false;
        document.getElementById('J').disabled = false;
        document.getElementById('K').disabled = false;
        document.getElementById('L').disabled = false;
        document.getElementById('M').disabled = false;
        document.getElementById('N').disabled = false;
        document.getElementById('O').disabled = false;
    } else {
        document.getElementById('A').disabled = true;
        document.getElementById('B').disabled = true;
        document.getElementById('C').disabled = true;
        document.getElementById('D').disabled = true;
        document.getElementById('E').disabled = true;
        document.getElementById('F').disabled = true;
        document.getElementById('G').disabled = true;
        document.getElementById('H').disabled = true;
        document.getElementById('I').disabled = true;
        document.getElementById('J').disabled = true;
        document.getElementById('K').disabled = true;
        document.getElementById('L').disabled = true;
        document.getElementById('M').disabled = true;
        document.getElementById('N').disabled = true;
        document.getElementById('O').disabled = true;
    }
}
//暂停按钮
function timePause() {
    if (document.getElementById("btnPause").innerHTML == '暂停考试') {
        timeControll(0);
        radiobtnEnable(0);
        document.getElementById("btnPause").innerHTML = '继续考试';
    } else {
        timeControll(1);
        radiobtnEnable(1);
        document.getElementById("btnPause").innerHTML = '暂停考试';
    }
}
//ABCD单选按钮
function radioBtn(option) {
    var index = document.getElementById("questionNO").selectedIndex;   
    yourAnswer[index] = option;
    refresh();
    if (document.getElementById("autoNext").checked == true) {
        setTimeout(() => selectedIndexChange('+'), 400) //点击ABCD单选按钮后，先延时0.4s，再自动跳转到下一题；
    }

}
//刷新答题记录文本框
function refresh() {
    var txtLogValue = '';
    for (i = 0; i < yourAnswer.length; i++) {
        if (yourAnswer[i] == undefined) {
            yourAnswer[i] = '未作答';
        }
    }
    for (i = 0; i < yourAnswer.length; i++) {
        txtLogValue = txtLogValue + "第" + (i + 1) + "题:" + yourAnswer[i] + "\n";
    }
    document.getElementById("txtLog").value = txtLogValue;
    document.getElementById("txtLog").scrollTop = document.getElementById("txtLog").scrollHeight; //滚动条自动滚动到最底部
}

function adjustIframe(){
    var ifm= document.getElementById("id_iframe");
    ifm.height=document.documentElement.clientHeight;
    // ifm.height=window.innerHeight;
    document.getElementsByClassName(container)=window.innerHeight;
    // ifm.width=document.documentElement.clientWidth;
}

//结束答题
function Finish() {
    if (yourAnswer.length < Standard_Answer1.length || yourAnswer.includes("未作答")) {
        if (confirm("答题尚未完成，是否提交？") == true) {
            for (i = 0; i < Standard_Answer1.length; i++) {
                if (yourAnswer[i] == undefined) {
                    yourAnswer[i] = '未作答';
                }
            }
            timeControll(0);
            answerCheck(arry_Standard_Anwser[document.getElementById("testPaper").selectedIndex - 1]);
            document.getElementById("btnSave").disabled = false; //启用保存考试结果按钮
            document.getElementById("btnStart").disabled = false; //启用开始考试结果按钮
        } else {
            var unAnswerNO = "";
            for (i = 0; i < Standard_Answer1.length; i++) {
                if ((yourAnswer[i] == undefined) || (yourAnswer[i] == "未作答")) {
                    yourAnswer[i] = '未作答';
                    unAnswerNO = unAnswerNO + "第" + i + "题，未作答；" + "\n";
                }
            }
            document.getElementById("txtResult").value = unAnswerNO;
            alert("以下题目未作答(详见“考试信息”文本框)，点击确定继续答题。" + "\n" + unAnswerNO);
        }
    } else {
        if (confirm("答题已完成，是否确认提交？") == true) {
            answerCheck(arry_Standard_Anwser[document.getElementById("testPaper").selectedIndex - 1]);
            document.getElementById("btnSave").disabled = false; //启用保存考试结果按钮
            timeControll(0); //停止计时
        }
    }
}

//六级答案
var Standard_Answer1 = ['A','B','C','A','D','D','C','D','A','B','B','C','D','A','B','A','D','C','C','B','A','A','D','D','B','A','B','K','H','J','G','L','I','E','F','E','B','J','D','K','F','C','G','A','H','B','A','C','D','B','A','D','A','C','D']; //cet6/2022-06/01

var Standard_Answer2 = ['A','C','B','C','D','D','D','A','D','C','B','C','A','B','A','C','D','B','B','D','B','C','A','C','A','B','H','A','L','J','M','C','E','D','O','G','B','K','E','L','D','F','J','A','H','D','A','A','B','C','DA','D','C','B']; //cet6/2021-12/01

var Standard_Answer3 = ['A','B','C','A','B','D','D','C','B','C','B','A','D','C','D','D','B','A','D','A','C','B','C','B','A','F','E','I','H','K','C','B','G','A','L','FI','D','J','C','E','K','G','B','H','D','A','B','A','D','B','C','D','A','C']; //cet6/2021-06/01

var Standard_Answer4 = ['B','B','A','D','C','D','C','A','C','D','A','A','D','B','C','B','A','C','D','B','C','A','D','A','D','A','E','J','N','G','M','B','L','H','O','D','L','E','N','F','Q','H','C','K','M','B','A','C','B','C','D','A','D','C','B'];//cet6/2020-12/01

var Standard_Answer5 = ['A','D','A','B','B','C','D','C','A','B','D','A','D','C','B','A','D','C','B','D','A','B','C','A','C','L','C','H','B','E','J','F','N','K','A','H','C','J','D','M','E','B','P','G','N','B','A','B','D','C','A','D','A','D','C'];//cet6/2020-09/01

var Standard_Answer6 = ['D','C','B','A','A','D','D','B','C','A','A','B','A','C','D','D','C','C','D','A','B','B','C','A','B','G','J','E','A','L','B','O','C','D','N','G','C','H','D','B','E','J','F','I','A','A','D','B','B','B','C','A','D','B','C'];//cet6/2019-12/01
//四级答案
var Standard_Answer7 = ['D','B','D','B','C','A','C','C','B','A','D','A','C','B','A','D','C','B','B','C','A','D','A','B','D','C','G','F','O','E','A','L','D','N','B','G','D','M','A','F','K','E','I','C','J','B','A','D','C','D','','A','B','C','B','C'];//cet4/2022-06/01

var Standard_Answer8 = ['C','A','B','C','D','B','C','D','A','B','D','A','B','C','B','A','B','C','A','D','C','A','D','D','B','O','I','D','C','J','B','F','A','M','G','H','E','C','K','F','I','B','G','J','D','C','D','A','C','A','B','A','D','B','A'];//cet4/2021-12/01

var Standard_Answer9 = ['B','A','A','D','B','C','D','C','B','A','D','D','A','C','B','A','D','C','B','A','C','B','C','B','D','C','F','E','K','G','M','J','N','O','A','E','G','J','C','H','E','D','A','I','F','C','A','B','C','B','B','C','D','D','A'];//cet4/2021-06/01

var Standard_Answer10 = ['D','B','C','D','A','C','B','A','D','B','D','B','C','A','D','C','B','D','A','A','D','A','C','B','C','C','M','G','A','O','J','K','F','I','H','H','D','K','B','G','I','E','C','H','F','D','A','B','C','D','A','D','B','C','B'];//cet4/2020-12/01

var Standard_Answer11 = ['A','D','C','A','B','D','B','A','D','B','C','C','B','A','C','B','A','C','A','D','D','A','B','C','C','I','E','D','J','B','K','N','C','FG','H','E','L','G','D','I','C','K','F','B','D','B','C','B','A','D','A','C','B','D'];//cet4/2020-09/01

var Standard_Answer12 = ['D','D','B','C','A','A','B','C','C','A','B','D','A','C','B','C','D','A','C','B','D','D','A','B','C','B','M','I','C','K','L','O','G','E','J','E','I','C','G','K','F','B','J','D','H','B','C','A','D','C','C','B','B','A','D'];//cet4/2019-12/01

var arry_Standard_Anwser = [Standard_Answer1, Standard_Answer2, Standard_Answer3, Standard_Answer4, Standard_Answer5, Standard_Answer6, Standard_Answer7, Standard_Answer8, Standard_Answer9, Standard_Answer10, Standard_Answer11, Standard_Answer12];

//核对答案
function answerCheck(arry_Standard_Anwser) {
    var Error_Sum = 0; //错题的个数
    var Error_Listening = 0; //听力题错误数量
    var Error_Vocabulary = 0; //词汇题错误数量
    var Error_ClozeTest = 0; //完形填空错误数量
    var Error_Reading = 0; //阅读题错误数量
    var txtResult = "";
    for (i = 0; i < Standard_Answer1.length; i++) {
        if (yourAnswer[i] != arry_Standard_Anwser[i]) {
            Error_Sum++;
            if (i < 15) {
                Error_Listening++;
            } else if (i >= 15 && i < 35) {
                Error_Vocabulary++;
            } else if (i >= 35 && i < 55) {
                Error_ClozeTest++;
            } else if (i >= 55 && i < 75) {
                Error_Reading++;
            }
            var wrongMessage = (yourAnswer[i] == "未作答") ? ("题：您未作答") : ("题：您的答案为" + yourAnswer[i]);
            txtResult = txtResult + ("第" + (i + 1) + wrongMessage + "，而参考答案为" + arry_Standard_Anwser[i] + "(×)" + "\r\n");
        } else {
            txtResult = txtResult + ("第" + (i + 1) + "题：您的答案为" + yourAnswer[i] + "，参考答案为" + arry_Standard_Anwser[i] + "(√)" + "\r\n");
        }
    }
    var Score_Lose = Error_Listening + Error_ClozeTest + Error_Reading * 2 + Error_Vocabulary * 1.5;
    document.getElementById("txtResult").value = txtResult + ("考试结果详情：" + "\r\n" + "您此次考试用时" + Math.floor(testTime / 60) + "分" + testTime % 60 + "秒，" + "总共错了" + Error_Sum + "题。" + "\r\n" + "其中听力错了" + Error_Listening + "题，词汇题错了" + Error_Vocabulary + "题，" + "\r\n" + "完型填空错了" + Error_ClozeTest + "题，阅读错了" + Error_Reading + "题。" + "\r\n" + "累计扣分" + Score_Lose + "分，总得分为" + (105 - Score_Lose) + "分，得分率为" + Math.round((105 - Score_Lose) * 100 / 105, 2) + "%。");
    document.getElementById("txtResult").scrollTop = document.getElementById("txtResult").scrollHeight;
}

function save() {
    var savedate = new Date();
    var months = (savedate.getMonth() + 1) < 10 ? "0" + (savedate.getMonth() + 1) : (savedate.getMonth() + 1);
    var dates = savedate.getDate() < 10 ? "0" + savedate.getDate() : savedate.getDate();
    var hours = savedate.getHours() < 10 ? "0" + savedate.getHours() : savedate.getHours();
    var minutes = savedate.getMinutes() < 10 ? "0" + savedate.getMinutes() : savedate.getMinutes();
    var seconds = savedate.getSeconds() < 10 ? "0" + savedate.getSeconds() : savedate.getSeconds();

    var filename = "考试结果" + savedate.getFullYear() + months + dates + hours + minutes + seconds;
    var obj = document.getElementById("testPaper");
    var index = obj.selectedIndex;

    var text = "您在" + savedate.getFullYear() + "年" + months + "月" + dates + "日" + hours + ":" + minutes + ":" + seconds + "完成了《" + obj.options[index].text + "》的测试，测试结果如下：" + "\n" + document.getElementById("txtResult").value;
    download(filename, text);
}



function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

window.onbeforeunload = function(event) {
    event.returnValue = "我在这写点东西...";
}
