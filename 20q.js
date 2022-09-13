let str = "";
let k = 1;
for( i = 0; i < 5; i++ ) {
    for( j = 1; j <= i; j++ ) {
        str+= " " + k;
        k++;
    }
    console.log( str );
    str = "";
}