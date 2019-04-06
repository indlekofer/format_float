# @indlekofer/format_float

[![npm version](https://badge.fury.io/js/%40indlekofer%2Fformat_float.svg)](https://badge.fury.io/js/%40indlekofer%2Fformat_float)

## Usage

```js
import formatFloat from '@indlekofer/format_float';

console.log(formatFloat("23.456.78", 2, ",", "."); // => 23456.78
```

## Params
  string floatFormat(float|string number, int decimals = 2, string decPoint = ",", string thousandsSep = ".", round = true)

  **number**: *string* input number              
  **decimals**: *number* decimals amount
  **decPoint**: *string* decimal point
  **thousandsSep**: *string* thousands separator
  **round**: *bool* do round ?(default: true)

## Return

  *float* value of given number or null  

