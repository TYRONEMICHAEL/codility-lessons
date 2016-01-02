// TapeEquilibrium
// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
// Score: 100%

module.exports = function solution(A) {
  var minDiff = Infinity;
  var leftSide = 0;
  var rightSide = A.reduce(function (sum, val) {
    return sum + val;
  }, 0);

  for(var i = 0; i < A.length - 1; i++) {
    var diff;
    leftSide += A[i];
    diff = Math.abs(leftSide - (rightSide - leftSide));

    if(diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
};
