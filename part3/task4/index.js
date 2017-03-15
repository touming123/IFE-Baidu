(function() {

    function move() {
        var direction = document.getElementById('go').value;
        switch (direction) {
            case 'GO':
                moveStep();
            case 'TUN LEF':
                trunLeft();
            case 'TUN RIG':
                trunRight();
            case 'TUN BAC':
                trunBack();
        }
    }

    function moveStep() {
        var direction = getDirection();
    }

    function getDirection() {
        var blocks = document.getElementsByClassName('move');
        for (var i = 0; i < blocks.length; i++) {
            var classname = blocks[i].className;
            if (classname.indexOf("hide") === -1) {

            }
        }
    }


    /**
     * 
    GO：向蓝色边所面向的方向前进一格（一格等同于正方形的边长）
    TUN LEF：向左转（逆时针旋转90度）
    TUN RIG：向右转（顺时针旋转90度）
    TUN BAC：向右转（旋转180度）
    */
    function init() {
        document.getElementById('ok').onclick = function(e) {
            move();
        }
    }
    init();
})()