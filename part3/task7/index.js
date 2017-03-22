(function() {
    function getGrade() {
        var score = [];
        var tr = document.getElementsByTagName('tr');
        for (var i = 1; i < tr.length; i++) {
            var td = tr[i].children;
            var grade = {};
            grade.name = td[0].innerHTML || "0";
            grade.chinese = td[1].innerHTML || "0";
            grade.math = td[2].innerHTML || "0";
            grade.english = td[3].innerHTML || "0";
            grade.total = td[4].innerHTML || "0";
            score.push(grade);
        }
        return score;
    }

    function sort(category, order) {
        var score = getGrade();
        score.sort(function(x, y) {
            if (order === 'up') {
                return  x[category] - y[category];
            } else {
                return y[category] - x[category];
            }
        });
        replaceTable(score);
    }

    function replaceTable (score) {
        var table = document.getElementsByTagName('tbody')[0];
        var tr = document.getElementsByTagName('tr');
        while(tr.length > 1) {
            table.removeChild(tr[1]);
        }

        for (var i = 0; i < score.length; i++) {
            var item = score[i];
            var row = '<td>'+ item.name + '</td>' + '<td>'+ item.chinese + '</td>' + '<td>'+ item.math + '</td>' + 
                '<td>'+ item.english + '</td>' + '<td>'+ item.total + '</td>';
            var tr = document.createElement('tr');
            tr.innerHTML = row;
            table.appendChild(tr);
        }
    }

    function init() {
        document.getElementById('chineseUp').onclick = function(e) {
            sort('chinese', 'up');
        }
        document.getElementById('chineseDown').onclick = function(e) {
            sort('chinese', 'down');
        }
        document.getElementById('matheUp').onclick = function(e) {
            sort('math', 'up');
        }
        document.getElementById('mathDown').onclick = function(e) {
            sort('math', 'down');
        }
        document.getElementById('englishUp').onclick = function(e) {
            sort('english', 'up');
        }
        document.getElementById('englishDown').onclick = function(e) {
            sort('english', 'down');
        }
        document.getElementById('totalUp').onclick = function(e) {
            sort('total', 'up');
        }
        document.getElementById('totalDown').onclick = function(e) {
            sort('total', 'down');
        }
    }
    init();
})()