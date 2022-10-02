# js-concepts

### 1. Conversions
#### Numeric
    - Happens Automatically in a mathematical functions.
    - String/String-> number 
    - String+String -> String //+ concatenates the string. Whereas, -,/,* -> convert the String to Number
    - String: 
        - whitespaces           -> removed, 
        - empty string          -> 0
        - space only string     -> 0
        - '2'                   -> 2
        - '2px'                 -> NaN

    - Unary + : Will convert the non-numeric type to number
    - undefined                -> NaN
    - null                     -> 0
    - Boolean:
        - true                 = 1, 
        - false                = 0
#### Boolean Conversion
    - Boolean of empty values(0, null, undefined, NaN) -> false
    - Boolean of non-empty string is true .
    - Boolean of empty string is false. 
#### Comparison
    - String Comparison : letter by letter
        - 'a'>'A'              -> true
        - '2'>'12              ->true, as 2 is greater than 1
        - 2>12                 -> false(number)

    - Comparison of different types: 
        - Converted to numbers and then compare
        - "0" == 0              -> true
        - null == undefined     ->true 
        - Special case, null is equal to undefined.

    - Null VS 0
        - null>0                  -> false
        - null>=0                 -> true , Number(null)=0
        - null==0                 -> false, as null is only equal to undefined
        - null == "\n0\n",        -> false 
        LHS=0, RHS=number(null)=0. But, null is only equal to undefined.

    - Incomparable undefined
        - undefined>0  -> false
        - undefined>=0 -> false
        - undefined==0 -> false
        - Any comparison with undefined is false,
        - except, undefined==null -> true
