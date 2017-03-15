(function() {

    function changeTab(event) {
        var tab0 = document.getElementById('radio0');
        var tab1 = document.getElementById('radio1');
        if (event.target === tab0) {
            document.getElementById("noStu").className = "tab";
            document.getElementById("stu").className = "item";
            changeSchool();
        } else {
            document.getElementById("stu").className = "tab";
            document.getElementById("noStu").className = "item";
        }
    }

    function changeSchool() {
        var city = document.getElementById('city');
        var value = city.value;
        var options = city.children;
        var cityName = "";
        for (var i = 0; i < options.length; i++) {
            if (options[i].value === value) {
                cityName = options[i].innerHTML;
                break;
            }
        }
        var schools = getOptions(cityName);
        var school = document.getElementById('school');
        var schoolOptions = school.children;
        for (var i = 0; i < schoolOptions.length; i++) {
            school.removeChild(schoolOptions[i]);
        }

        schoolOptions = '';
        for (var i = 0; i < schools.length; i++) {
            schoolOptions += '<option value=' + i + '>' + schools[i] + '</option>';
        }
        school.innerHTML = schoolOptions;
    }

    function getOptions(cityName) {
        var citySchool = {
            "北京": ["北京一中", "北京2中", "北京3中", "北京4中"],
            "天津": ["天津2中", "天津3中", "天津8中", "天津耀华"],
            "河北": ["河北2中", "衡水一中"],
        };
        return citySchool[cityName];
    }


    function init() {
        changeSchool();
        document.getElementById('radio0').onclick = function(e) {
            changeTab(e);
        }
        document.getElementById('radio1').onclick = function(e) {
            changeTab(e);
        }
        document.getElementById('city').onchange = function() {
            changeSchool();
        }
    }
    init();
})()