(function () {
    function checkInput() {        
        var result = document.getElementById('resultId');
        var input = document.getElementById('infoId');
        var val = input.value;
        var len = 0;
        if (val === "") {
            result.innerHTML = "姓名不能为空";
            result.style.color = "red";
            input.style.borderColor = "red";
        } else {
            var flag = true;
            for (var i = 0; i < val.length; i++) {
                if (testWord(val[i])) {
                    len += 1;
                } else if (testChinese(val[i])) {
                    len += 2;
                } else {
                    flag = false;
                    break;
                }
            }
            if (flag && len>=4 && len <= 16) {
                result.innerHTML = "名称格式正确";
                result.style.color = "#5ebc45";
                input.style.borderColor = "#5ebc45";
            } else {
                result.innerHTML = "名称格式有误";
                result.style.color = "red";
                input.style.borderColor = "red";
            }
        }
        
    }

    function testWord(ch) {
        return /^\w$/.test(ch);
    }

    function testChinese(ch) {
        return /^[\u400-\u9fa5$]/.test(ch);
    }

    function init() {
        document.getElementById('btnId').onclick = function () {
            checkInput();
        }
    }
    init();
})()