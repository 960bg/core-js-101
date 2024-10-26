/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  const story = {
    1: 1,
  };

  return (function getfact() {
    if (Object.hasOwn(story, n)) {
      return story[n];
    }
    for (let i = 2; i <= n; i += 1) {
      story[i] = story[i - 1] * i;
    }
    return story[n];
  }());
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  const len = n2 - n1;
  const tmp = new Array(len);
  let nxt = n1;
  let summ = n1;
  tmp.fill(0);
  tmp.map(() => {
    nxt += 1;
    summ += nxt;
    return summ;
  });
  return summ;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(...arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] + arr[1] > arr[2]) {
    return true;
  }
  return false;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  // console.log('rect1 => ');
  // console.log(rect1);
  // console.log('rect2 => ');
  // console.log(rect2);
  const x11 = rect1.left;
  const x12 = rect1.left + rect1.width;
  const y11 = rect1.top;
  const y12 = rect1.top + rect1.height;

  const x21 = rect2.left;
  const x22 = rect2.left + rect2.width;
  const y21 = rect2.top;
  const y22 = rect2.top + rect2.height;


  if ((x11 <= x21
    && x21 <= x12
    && y11 <= y21
    && y21 <= y12)
    || (x21 <= x11
      && x11 <= x22
      && y21 < y11
      && y11 < y22)) {
    // console.log(true);

    return true;
  }
  // console.log(false);

  return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const [x, y] = [point.x, point.y];
  const r = circle.radius;
  const [cx, cy] = [circle.center.x, circle.center.y];


  if ((cx - x) ** 2 + (cy - y) ** 2 < r ** 2) {
    return true;
  }
  return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const s = str.split('');
  // console.log('s => ', s);

  const chars = {};

  const res = s.reduce((acc, curr) => {
    if (chars[curr]) {
      chars[curr] += 1;
      return acc;
    }
    chars[curr] = 1;
    acc.push(curr);
    return acc;
  }, []);

  // console.log('res:', res);

  for (let index = 0; index < res.length; index += 1) {
    if (chars[res[index]] === 1) {
      // console.log('result: ', res[index]);
      return res[index];
    }
  }
  // console.log('result: ', null);

  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let start = a;
  let end = b;
  const startIncluded = isStartIncluded ? '[' : '(';
  const endIncluded = isEndIncluded ? ']' : ')';
  if (start > end) {
    [start, end] = [end, start];
  }
  // console.log('a, b => ', a, b);
  // console.log('a, b => ', start, end);
  // console.log(`${startIncluded}${start}, ${end}${endIncluded}`);

  return `${startIncluded}${start}, ${end}${endIncluded}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +String(num).split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} ccn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */

function isCreditCardNumber(ccn) {
  const controlNum = ccn - Math.trunc(ccn / 10) * 10;
  // console.log('cnn: ', ccn);
  // console.log('controlNum: ', controlNum);
  const masNums = String(ccn)
    .split('')
    .splice(0, String(ccn).length - 1)
    .reverse()
    .map((v, i) => {
      if (i % 2 === 0) {
        const num = Number(v) * 2;
        // console.log('Number(v) * 2: ', num);

        if (num > 9) {
          return (Math.trunc(num / 10) % 10) + (num % 10);
        }
        return num;
      }
      return Number(v);
    })
    .reduce((acc, curr) => acc + curr, 0);

  const calcNum = (10 - (masNums % 10)) % 10;
  // console.log('calcNum: ', calcNum);
  // console.log('masNums: ', masNums);
  if (controlNum === calcNum) {
    return true;
  }
  return false;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  // console.log('num: ', num);
  let n = num;
  let c = 0;
  while (n > 9 && c < 10) {
    c += 1;
    // console.log('n: ', n);
    n = String(n).split('').reduce((acc, curr) => acc + Number(curr), 0);
    // console.log('n = ', n);
  }
  // console.log('n: ', n);
  return n;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  // console.log('str: ', str);
  // массив возможных скобок
  const findBrackets = [];
  const bracketsStart = ['[', '{', '(', '<'];
  const bracketsEnd = [']', '}', ')', '>'];

  if (str.length === 0) { return true; }
  if (bracketsEnd.includes(str[0])) { return false; }

  for (let i = 0; i < str.length; i += 1) {
    // если скобка откр то добавить в массив
    if (bracketsStart.includes(str[i])) {
      findBrackets.push(str[i]);
      // console.log('findBrackets.push(str[i]): ', str[i]);
    }
    //  если скобка закр то проверить какая была посл откр скобка и
    //  если того же типа то удалить из массива скобок посл эл-т т.е.
    //  посл найденную откр скобку
    if (bracketsEnd.includes(str[i])) {
      // определить какой тип у закр скобки должен быть:
      const lastOpenBr = findBrackets[findBrackets.length - 1];
      const lastIndexBr = bracketsStart.indexOf(lastOpenBr);
      const lastCloseBr = bracketsEnd[lastIndexBr];
      if (str[i] === lastCloseBr) {
        findBrackets.pop();
      } else {
        return false;
      }
    }
  }

  // все скобки нашли пару и были удалены из массива
  if (findBrackets.length === 0) {
    // console.log(true);
    return true;
  }
  // console.log(false);
  return false;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 *  5*10^0+6*10^1+3*10^2
 *
 * 19/2 = 9 с остатком 1
9/2 = 4 c остатком 1
4/2 = 2 без остатка 0
2/2 = 1 без остатка 0
1/2 = 0 с остатком 1
В результате получаем число 19 в двоичной записи: 10011.
 *
 */
function toNaryString(num, n) {
  let chastnoe = num;
  const ost = [];
  while (chastnoe !== 0) {
    ost.push(chastnoe % n);
    chastnoe = Math.trunc(chastnoe / n);
  }
  return ost.reverse().join('');
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  // console.log('pathes', pathes);
  const firstSimb = [];
  if (pathes.length === 0) { return ''; }
  if (pathes.length === 1) { return pathes[0]; }

  for (let i = 0; i < pathes.length; i += 1) {
    const path = pathes[i];
    if (!firstSimb.includes(path[0])) {
      firstSimb.push(path[0]);
    }
    if (firstSimb.length > 1) {
      return '';
    }
  }

  const separator = firstSimb[0];
  let str = '';
  let tempStr = '';
  for (let i = 1; i < pathes.length; i += 1) {
    const path0 = pathes[0];
    const path1 = pathes[i];
    str = '';
    tempStr = '';
    for (let j = 0; j < path1.length; j += 1) {
      if (path0[j] === path1[j]) {
        tempStr += path0[j];
        if (path0[j] === separator) {
          str += tempStr;
          tempStr = '';
        }
      } else {
        j = path1.length;
      }
    }
  }

  // console.log('str: ', str);

  // const mas = pathes[0].split(separator);
  // console.log('mas: ', mas);

  return str;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  // Матрицы  A   и  B могут быть перемножены,
  //  если они совместимы в том смысле,
  //  что число столбцов матрицы  A  равно числу строк матрицы B
  if (m1[0].length !== m2.length) {
    // console.log(`Матрицы не быть перемножены.
    //    число столбцов матрицы  A  не равно числу строк матрицы B`);
  }
  // console.log('m1: ', m1);
  // console.log('m2: ', m2);

  const sizeRow = m1.length;
  const sizeCol = m2[0].length;
  const nth = m1[0].length;

  const mRes = [];

  for (let cRow = 0; cRow < sizeRow; cRow += 1) {
    // добавить строку в рез
    mRes.push([]);
    for (let cCol = 0; cCol < sizeCol; cCol += 1) {
      let res = 0;
      for (let c = 0; c < nth; c += 1) {
        res += m1[cRow][c] * m2[c][cCol];
      }
      mRes[cRow].push(res);
    }
  }

  // console.log('mRes:', mRes);

  return mRes;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */

function evaluateTicTacToePosition(m) {
  // console.log('position', m);
  const diag1 = [];
  const diag2 = [];
  for (let row = 0; row < m.length; row += 1) {
    // в строку
    let row1 = [];
    let col1 = [];
    for (let col = 0; col < m[row].length; col += 1) {
      // заполняем строку
      if (row1.length !== 0) {
        if (row1[0] === m[row][col]) {
          row1.push(m[row][col]);
        }
      }
      if (row1.length === 0 && m[row][col] !== undefined) {
        row1.push(m[row][col]);
      }

      // проверка на окончание итерации по строке
      if (col === m[row].length - 1) {
        // в строку
        if (row1.length === 3) {
          // console.log('row1: ', row1);
          return row1[0];
        }
        row1 = [];
      }

      // заполняем  столбец
      if (col1.length !== 0) {
        if (col1[0] === m[col][row]) {
          col1.push(m[col][row]);
        }
      }
      if (col1.length === 0 && m[col][row] !== undefined) {
        col1.push(m[col][row]);
      }

      // проверка на окончание итерации по столбцу
      if (col === m[row].length - 1) {
        // в строку
        if (col1.length === 3) {
          // console.log('col1: ', col1);
          return col1[0];
        }
        col1 = [];
      }

      // заполняем диагональ 1
      if (col === row) {
        // console.log('заполняем диагональ 1: col === row');
        if (diag1.length !== 0) {
          if (diag1[0] === m[row][col]) {
            // console.log('заполняем диагональ 1: ', m[row][col]);
            // console.log('заполняем диагональ 1: diag1:', diag1);
            diag1.push(m[row][col]);
          }
        }
        if (diag1.length === 0 && m[row][col] !== undefined) {
          // console.log('заполняем диагональ 1: diag1.length === 0');
          diag1.push(m[row][col]);
        }
      }

      // console.log('diag1.length = ', diag1.length);
      // console.log('diag1 = ', diag1);

      // проверка на окончание итерации по диагонали1
      // в диагонали
      if (diag1.length === 3) {
        // console.log('diag1: ', diag1);
        return diag1[0];
      }

      // заполняем диагональ 2
      const colDiag = m[row].length - 1 - col;
      if (row === colDiag) {
        // console.log('заполняем диагональ 2: row === colDiag');
        if (diag2.length !== 0) {
          if (diag2[0] === m[row][col]) {
            // console.log('заполняем диагональ 2: ', m[row][col]);
            diag2.push(m[row][col]);
            // console.log('заполняем диагональ 2: diag2.length === 0', diag2);
          }
        }
        if (diag2.length === 0 && m[row][colDiag] !== undefined) {
          diag2.push(m[row][col]);
          // console.log('заполняем диагональ 2: diag2.length === 0', diag2);
        }
      }

      // проверка на окончание итерации по диагонали2
      // в диагонали
      if (diag2.length === 3) {
        // console.log('diag2: ', diag2);
        return diag2[0];
      }
    }
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
