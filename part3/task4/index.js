(function() {

    /**
     * 判断行动
     */
    function action() {
        var direction = document.getElementById('go').value;
        switch (direction) {
            case "GO":
                moveStep();
                break;
            case "TUN LEF":
                trunLeft();
                break;
            case "TUN RIG":
                trunRight();
                break;
            case "TUN BAC":
                trunBack();
                break;
            default:
                break;
        }
    }

    /**
     * 棋子左转
     */
    function trunLeft() {
        var block = getBlockId();
        var dirArr = ["top", "left", "bottom", "right", "top"];
        console.log(dirArr.indexOf(block));
        var temp = dirArr[dirArr.indexOf(block)+1];
        var node = document.getElementById(dirArr[dirArr.indexOf(block)+1]);
        replaceNode (node);
    }

    /**
     * 棋子右转
     */
    function trunRight() {
        var block = getBlockId();
        var dirArr = ["top", "right", "bottom", "left", "top"];
        console.log(dirArr.indexOf(block));
        var temp = dirArr[dirArr.indexOf(block)+1];
        var node = document.getElementById(temp);
        //var node = document.getElementById(dirArr[dirArr.indexOf(block)+1]);
        replaceNode (node);
    }

    /**
     * 棋子后转
     */
    function trunBack() {
        var block = getBlockId();
        var dirArr = ["top", "right", "bottom", "left", "top", "right"];
        var node = document.getElementById(dirArr[dirArr.indexOf(block)+2]);
        replaceNode (node);
    }
    
    /**
     * 通过class改变棋子方向
     * @param {*} replace 
     */
    function replaceNode (replace) {
        var blockId = getBlockId();
        var block = document.getElementById(blockId);
        var row = block.parentNode;
        block.className = "move hide";

        row.replaceChild(replace, block);//
        document.getElementsByClassName("container")[0].appendChild(block);
        replace.className = "move";
    }

    /**
     * 判断棋子位置，决定移动方向
     */
    function moveStep() {
        var blockId = getBlockId();
        var block = document.getElementById(blockId);
        var row = block.parentNode;
        var column = -1;
        for (var i = 0, children = row.children; i < children.length; i++) {
            if (children[i] === block) {
                column = i;
                break;
            }
        }

        switch (blockId) {
            case "top":
                goTop(blockId, row, column);
                break;
            case "bottom":
                goBottom(blockId, row, column);
                break;
            case "left":
                goLeft(blockId, row, column);
                break;
            case "right":
                goRight(blockId, row, column);
            default:
                break;
        }
    }

    /**
     * 向前移动一个格子
     * @param {*} blockId 
     * @param {*} row 
     * @param {*} column 
     */
    function goTop(blockId, row, column) {
        var node = document.getElementById (blockId);
        var List = node.parentNode;

        if (List.firstElementChild.innerHTML <= 1) {
            return;
        }

        var topList = row.previousElementSibling;
        var topNode = topList.children[column];
        var cloneNode = topNode.cloneNode(true);
        
        List.replaceChild(cloneNode, node);
        topList.replaceChild(node, topNode);
    }

    /**
     * 向下移动一个格子
     * @param {*} blockId 
     * @param {*} row 
     * @param {*} column 
     */
    function goBottom(blockId, row, column) {
        var node = document.getElementById (blockId);
        var List = node.parentNode;

        if (List.firstElementChild.innerHTML >= 10) {
            return;
        }
        var bottomList = List.nextElementSibling;
        var bottomNode = bottomList.children[column];
        var cloneNode = bottomNode.cloneNode(true);
        List.replaceChild(cloneNode, node);
        bottomList.replaceChild(node, bottomNode);
    }

    /**
     * 向左移动一个格子
     * @param {*} blockId 
     * @param {*} row 
     * @param {*} column 
     */
    function goLeft(blockId, row, column) {
        var node = document.getElementById (blockId);
        var List = node.parentNode;

        if (column <= 1) {
            return;
        }

        var leftNode = node.previousElementSibling;
        var cloneNode = leftNode.cloneNode(true);
        
        List.replaceChild(cloneNode, node);
        List.replaceChild(node, leftNode);
    }

    /**
     * 向右移动一个格子
     * @param {*} blockId 
     * @param {*} row 
     * @param {*} column 
     */
    function goRight(blockId, row, column) {
        var node = document.getElementById (blockId);
        var List = node.parentNode;

        if (column >= 10) {
            return;
        }

        var rightNode = node.nextElementSibling;
        var cloneNode = rightNode.cloneNode(true);
        
        List.replaceChild(cloneNode, node);
        List.replaceChild(node, rightNode);
    }

    /**
     * 得到棋子位置
     */
    function getBlockId() {
        var blocks = document.getElementsByClassName('move');
        for (var i = 0; i < blocks.length; i++) {
            var classname = blocks[i].className;
            if (classname.indexOf("hide") === -1) {
                return blocks[i].id;
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
            action();
        }
        document.getElementById('btn1').onclick = function() {
            moveStep();
        }
        document.getElementById('btn2').onclick = function() {
            trunLeft();
        }
        document.getElementById('btn3').onclick = function() {
            trunRight();
        }
        document.getElementById('btn4').onclick = function() {
            trunBack();
        }
    }
    init();
})()