let app2 = new Observer({
    name: {
        firstName: 'shaofeng',
        lastName: 'liang'
    },
    age: 25,
    school: {
        name: 'bupt',
        location: 'xtc10'
    }
});

app2.$watch('name', function (newName) {
    console.log('我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。')
});
app2.$watch('school', function (newName) {
    console.log(`我的学校发生了改变,现在它叫${newName.name}`)
});

app2.data.name.firstName = 'hahaha';
// 输出：我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。
app2.data.name.lastName = 'blablabla';
app2.data.school.name = 'beijingyoudian';
