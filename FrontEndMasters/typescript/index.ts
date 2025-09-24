class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let l1 = [2, 4, 3],
  l2 = [5, 6, 4];

function addTwoNumbers(
  l1: number[] | null,
  l2: number[] | null
): number[] | null {
  const reverseAndAdd = (array: number[]) =>
    array
      .map((el, index) => (index === 2 ? el * 100 : index === 1 ? el * 10 : el))
      .reduce((prev, curr) => prev + curr);

  const number1 = l1 && reverseAndAdd(l1);
  const number2 = l2 && reverseAndAdd(l2);
  const sum = number1 && number2 && number1 + number2;

  const reversedArray = `${sum}`
    .split("")
    .map((x) => +x)
    .reverse();
  console.log(reversedArray);
  
  return reversedArray;
}


addTwoNumbers(l1, l2);