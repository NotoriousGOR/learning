var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var l1 = [2, 4, 3], l2 = [5, 6, 4];
function addTwoNumbers(l1, l2) {
    var reverseAndAdd = function (array) {
        return array
            .map(function (el, index) { return (index === 2 ? el * 100 : index === 1 ? el * 10 : el); })
            .reduce(function (prev, curr) { return prev + curr; });
    };
    var number1 = l1 && reverseAndAdd(l1);
    var number2 = l2 && reverseAndAdd(l2);
    var sum = number1 && number2 && number1 + number2;
    var reversedArray = "".concat(sum)
        .split("")
        .map(function (x) { return +x; })
        .reverse();
    console.log(reversedArray);
    return reversedArray;
}
addTwoNumbers(l1, l2);
