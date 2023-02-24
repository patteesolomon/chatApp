// tracking the graph length and width of this thing creates
// a = 4bytes
// b = 4bytes
// even the sum is 4bytes
////// TABLE

// Boolean	Boolean	Depends on implementing platform	True or False this scales based on the allocated bytes for a boolean variable usually 1 more than the number of bytes allocated for an unsigned short var and 1 more than the number of bytes allocated for an unsigned long variable
// Byte	Byte	1 byte	0 through 255 (unsigned)
// Char (single character)	Char 2 bytes 0 through 65535 (unsigned)
// Date	DateTime	8 bytes	0:00:00 (midnight) on January 1, 0001 through 11:59:59 PM on December 31, 9999
// Decimal	Decimal	16 bytes 0 through +/-79,228,162,514,264,337,593,543,950,335 (+/-7.9...E+28) † with no decimal point; 0 through +/-7.9228162514264337593543950335 with 28 places to the right of the decimal;

// smallest nonzero number is +/-0.0000000000000000000000000001 (+/-1E-28) †
// Double (double-precision floating-point)	Double	8 bytes	-1.79769313486231570E+308 through -4.94065645841246544E-324 † for negative values;

// 4.94065645841246544E-324 through 1.79769313486231570E+308 † for positive values
// Integer	Int32	4 bytes	-2,147,483,648 through 2,147,483,647 (signed)
// Long (long integer)	Int64	8 bytes	-9,223,372,036,854,775,808 through 9,223,372,036,854,775,807 (9.2...E+18 †) (signed)
// Object	Object (class)	4 bytes on 32-bit platform

// 8 bytes on 64-bit platform	Any type can be stored in a variable of type Object
// SByte	SByte	1 byte	-128 through 127 (signed)
// Short (short integer)	Int16	2 bytes	-32,768 through 32,767 (signed)
// Single (single-precision floating-point)	Single	4 bytes	-3.4028235E+38 through -1.401298E-45 † for negative values;

// 1.401298E-45 through 3.4028235E+38 † for positive values
// String (variable-length)	String (class)	Depends on implementing platform	0 to approximately 2 billion Unicode characters
// UInteger	UInt32	4 bytes	0 through 4,294,967,295 (unsigned)
// ULong	UInt64	8 bytes	0 through 18,446,744,073,709,551,615 (1.8...E+19 †) (unsigned)
// User-Defined (structure)	(inherits from ValueType)	Depends on implementing platform	Each member of the structure has a range determined by its data type and independent of the ranges of the other members
// UShort	UInt16	2 bytes	0 through 65,535 (unsigned)

//// ===== BASIC TABLE ===== ////

// Byte	1 byte	0 through 255 
// Char 2 bytes 0 through 655
// DateTime	8 bytes
// Decimal	16 bytes 
// Double	8 bytes	
// Int32	4 bytes	
// Int64	8 bytes	
// Object (class) 4 bytes
// SByte	1 byte	 
// Int16	2 bytes	
// Single	4 bytes	
// UInt32	4 bytes	
// UInt64	8 bytes	
// UInt16	2 bytes	

// equation for space complexity
// spaceC = input + aux;

// constant space
// 

// t3st 

function add(a /*4 b */, b /*4b */)
{
    sum = a+b; // 4+4+4 + statement number;
    return sum;
} // ==> 16bytes all of this

// this array changes everything with N * 4bytes
sumOfNumbers = (arr=[], N) => // N * 4bytes for the integer
{
    sum = 0;
    for (let i = 0; i < N; i++) // this loops 12 bytes = i + sum + arr(N*4)
    {
        sum =+ arr[i];
    }
    console.log(sum);
}; // because these are 4 bytes
//  each they'll add together and make 12 then it'll scale upward
// 4N + C

var fact = 1;
Factorial = () => {
    for (let i = 0; i <= n; i++) {
        fact *= i;
    }
    return fact;
};

// O(n) constant

//FactorialTwo

/* SC chart
    ^
    |bytes
    |118 
    |114 
    |110 
    |106 
    |102 
    |88 
    |84 
    |80
    |76
    |72
    |68
    |64
    |60
    |56
    |52
    |48
    |44
    |40
    |36
    |32
    |28
    |24
    |20
    |16         add() ------------------------->>> constant space == O(1)
    |12         
    |8
    |4
    |-------------------------------------------------------------------------------------------------------------------------------->
            1           2           3            4            5            6            7           8            9            10
*/  //passed values on x plane