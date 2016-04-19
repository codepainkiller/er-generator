var alphabet = ['a', 'b', 'c', 'd'];

var er = '(a|bb*(a(b))';//$('#er').val();
console.log('ER validate is:', balancingGroupingSymbols(er));

function isValid(str) {
    if (balancingGroupingSymbols(str) && validOrSimbol(str)) {
        return true;
    }

    return false;
}

function validOrSimbol(str) {
    var stack = [];
    var arr = str.split('');

    arr.forEach(function (element, index) {
        if (element === '(') {
            temp += element;
            stack.push(element);
        } else if (element === ')') {
            stack.pop(element);
        } else if (element === '|') {

        }
        console.log(stack);
    })

    if (stack.length === 0) {
        return true;
    }

    return false;
}

function balancingGroupingSymbols(str) {
    var stack = [];
    var arr = str.split('');

    arr.forEach(function (element, index) {
        if (element === '(') {
            stack.push(element);
        } else if (element === ')') {
            stack.pop(element);
        }
        console.log(stack);
    })

    if (stack.length === 0) {
        return true;
    }

    return false;
}