var flag = true;
var nums = [];
nums.length = 30;

var i = 0;

while (flag) {
  var input = prompt('더할 숫자를 입력하세요('+ (i + 1) + '번째, 최대 30개)');

  if (input == '' || input == null || i >= nums.length) {
    flag = false;
  }
  else {
    nums[i] = parseInt(input, 10);
  }
  i++;
}

var result = 0;

for (var j = 0; j < nums.length; j++) {
  if (typeof nums[j] == 'number') {
    result = result + nums[j];
  }
}

console.log(result);
