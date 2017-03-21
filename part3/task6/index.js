(function() {


    function createNodes() {
        var body = document.createElement('div');
        setBodyStyle(body);
        var wrap = document.createElement('div');
        setWrapStyle(wrap);
        var head = document.createElement('div');
        setHeadStyle(head);
        var word = document.createElement('p');
        setWordStyle(word);
        var btnWrap = document.createElement('div');
        setBtnStyle(btnWrap);

        wrap.appendChild(head);
        wrap.appendChild(word);
        wrap.appendChild(btnWrap);
        body.appendChild(wrap);
        document.body.appendChild(body);
    }

    function setBodyStyle(node) {
        var width = document.body.scrollWidth;
        var height = document.body.scrollHeight;
        node.style.width = width + 'px';
        node.style.height = height + 'px';
        node.className = 'container';
    }
    
    function setWrapStyle(node) {
        node.className = 'wrap';
        var width = document.body.scrollWidth;
        var height = document.body.scrollHeight;
        var w = node.style.width/2;
        node.style.top = height/2 - 320/2 + 'px';
        node.style.left = width/2 - 650/2 + 'px';
    }

    function setHeadStyle(node) {
        node.className = 'head';
    }

    function setWordStyle(node) {
        node.className = 'word';
    }

    function setBtnStyle(node) {
        node.className = 'btnWrap';
        var btnOk = document.createElement('button');
        btnOk.className = 'btnOk';
        btnOk.innerHTML = '确定';
        btnOk.onclick = function() {
            clickOK();
        }
        var btnCancle = document.createElement('button');
        btnCancle.className = 'btnCancle';
        btnCancle.innerHTML = '取消';
        btnCancle.onclick = function() {
            clickCancle();
        }
        node.appendChild(btnOk);
        node.appendChild(btnCancle);
    }

    function clickOK() {
        var container = document.getElementsByClassName('container')[0];
        document.body.removeChild(container);
    
    }

    function clickCancle() {
        var container = document.getElementsByClassName('container')[0];
        document.body.removeChild(container);
    }

    function showAlert(title, content) {
        alert(title, content);
    }

    function init() {
        document.getElementById('showAlert').onclick = function() {
            var t = document.getElementById('title');
            var c = document.getElementById('content');
            var tt = t.value;
            var title = document.getElementById('title').value || "这里是题目";
            var content = document.getElementById('content').value || "这里是内容";
            showAlert(title, content);
        }
    }

    init();
    window.alert = function(title, content) {
        createNodes();
        var head = document.getElementsByClassName('head')[0];
        head.innerHTML = title;
        var word = document.getElementsByClassName('word')[0];
        word.innerHTML = content;
    };
})();