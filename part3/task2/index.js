(function () {

    function checkName() {
        var result = document.getElementById('resultId');
        var input = document.getElementById('infoId');
        var val = input.value;
        var len = 0;
        if (val === "") {
            showResult(input, result, "姓名不能为空", false);
            return false;
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
                showResult(input, result, "名称正确", true);
                return true;
            } else {
                showResult(input, result, "名称填写有误", false);
                return false;
            }
        }
    }

    function checkPass () {
        var result = document.getElementById('resultPass');
        var input = document.getElementById('infoPass');
        var val = input.value;
        if (val === "") {
            showResult(input, result, "密码不能为空", false);
            return false;
        } else {
            if (val.length >= 4 && val.length <= 16) {
                showResult(input, result, "密码可用", true);
                return true;
            } else {
                showResult(input, result, "密码不可用", false);
                return false;
            }
        }
    }

    function checkPassAgain () {
        var result = document.getElementById('resultPassAgain');
        var input = document.getElementById('infoPassAgain');
        var val = input.value;
        var firstValue = document.getElementById('infoPass').value;
        if (val === "") {
            showResult(input, result, "密码不能为空", false);
        } else {
            if (val === firstValue) {
                showResult (input, result, "密码输入一致", true);
                return true;
            } else {
                showResult (input, result, "密码输入不一致", false);
                return false;
            }
        }

    }

    function  checkEmail () {
        var result = document.getElementById('resultEmail');
        var input = document.getElementById('infoEmail');
        var val = input.value;
        if (val === "") {
            showResult(input, result, "邮箱不能为空", false);
            return false;
        } else {
            if (testEmail(val)) {
                showResult(input, result, "邮箱可用", true);
                return true;
            } else {
                showResult(input, result, "邮箱不可用", false);
                return false;
            }
        }
    }

    function checkPhone () {
        var result = document.getElementById('resultPhone');
        var input = document.getElementById('infoPhone');
        var val = input.value;
        if (val === "") {
            showResult(input, result, "手机不能为空", false);
            return false;
        } else {
            if (testPhone(val)) {
                showResult(input, result, "手机可用", true);
                return true;
            } else {
                showResult(input, result, "手机不可用", false);
                return false;
            }
        }
    }

    function showResult(input, result, msg, flag) {
        result.innerHTML = msg;
        if (flag) {
            result.style.color = "#6fa985";
            input.style.borderColor = "#6fa985";
        } else {
            result.style.color = "#fb6a7a";
            input.style.borderColor = "#fb6a7a";
        }

    }

    function checkForm () {
        if (checkName() && checkPass() && checkPassAgain() && checkEmail() && checkPhone()) {
            alert("填写正确");
        } else {
            alert("输入有误");
        }
    }

    function testWord(ch) {
        return /^\w$/.test(ch);
    }

    function testChinese(ch) {
        return /^[\u400-\u9fa5$]/.test(ch);
    }

    function testEmail (ch) {
        var reg = /^\w+([-+.]\w+)*@\w+([-.]|\w+)*\.\w+([-.]|\w+)*$/;
        return reg.test(ch);
    }

    function testPhone (ch) {
        var reg = /^1[3|5|8]\d{9}$/;
        return reg.test(ch);
    }

    function init() {
        document.getElementById('btnForm').onclick = function () {
            checkForm();
        }
        document.getElementById('infoId').onblur = function () {
            checkName();
        }
        document.getElementById('infoPass').onblur = function () {
            checkPass();
        }
        document.getElementById('infoPassAgain').onblur = function () {
            checkPassAgain();
        }
        document.getElementById('infoEmail').onblur = function () {
             checkEmail();
        }
        document.getElementById('infoPhone').onblur = function () {
            checkPhone();
        }
    }
    init();
})()