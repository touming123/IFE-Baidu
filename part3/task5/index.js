(function () {
    var direction = 0;
    var distance = 52;

    var judgeUp = 54;
    var judgeDown = 470;

    var squareLeft = 106;
    var squareTop = 314;
    var square = document.getElementById('square');

    function goLeft() {
        if (squareLeft >= judgeUp) {
            squareLeft -= distance;
            square.style.left = squareLeft;
        }
    }
    function goTop() {
        if (squareTop >= judgeUp) {
            squareTop -= distance;
            square.style.top = squareTop;
        }
    }
    function goRight() {
        if (squareLeft < judgeDown) {
            squareLeft += distance;
            square.style.left = squareLeft;
        }
    }
    function goBottom() {
        if (squareTop < judgeDown) {
            squareTop += distance;
            square.style.top = squareTop;
        }
    }

    function turnLeft() {
        direction = 270;
        square.style.transform = "rotateZ(270deg)";
    }
    function turnRight() {
        direction = 90;
        square.style.transform = "rotateZ(90deg)";
    }
    function turnTop() {
        direction = 0;
        square.style.transform = "rotateZ(0deg)";
    }
    function turnBottom() {
        direction = 180;
        square.style.transform = "rotateZ(180deg)";
    }

    //移动
    function moveByDirection() {
        switch (direction) {
            case 0:
                goTop();
                break;
            case 90:
                goRight();
                break;
            case 180:
                goBottom();
                break;
            case 270:
                goLeft();
                break;
            default:
                break;
        }
    }
    //旋转方向
    function turnByDirection() {
        switch (direction) {
            case 0:
                turnTop();
                break;
            case 90:
                turnRight();
                break;
            case 180:
                turnBottom();
                break;
            case 270:
                turnLeft();
                break;
            default:
                break;
        }
    }
    function setCorrectDirection() {
        if (direction < 0) {
            direction += 360;
        } else if (direction >= 360) {
            direction -= 360;
        }
    }

    function init() {
        //向左移动一个格子
        document.getElementById('TRALEF').onclick = function () {
            goLeft();
        }
        document.getElementById('TRATOP').onclick = function () {
            goTop();
        }
        document.getElementById('TRARIG').onclick = function () {
            goRight();
        }
        document.getElementById('TRABOT').onclick = function () {
            goBottom();
        }
        //方向转向左，并向左移动移动一个格子
        document.getElementById('MOVLEF').onclick = function () {
            turnLeft();
            goLeft();
        }
        document.getElementById('MOVTOP').onclick = function () {
            turnTop();
            goTop();
        }
        document.getElementById('MOVRIG').onclick = function () {
            turnRight();
            goRight();
        }
        document.getElementById('MOVBOT').onclick = function () {
            turnBottom();
            goBottom();
        }
        //向格子所在方向移动一个格子
        document.getElementById('GO').onclick = function () {
            moveByDirection();
        }
        document.getElementById('TUNLEF').onclick = function () {
            direction -= 90;
            setCorrectDirection();
            turnByDirection();
        }
        document.getElementById('TUNRIG').onclick = function () {
            direction += 90;
            setCorrectDirection();
            turnByDirection();
        }
        document.getElementById('TUNBAC').onclick = function () {
            direction += 180;
            setCorrectDirection();
            turnByDirection();
        }
    }
    init();
})()