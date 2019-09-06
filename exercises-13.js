
function targetTerdekat(arr) {
    var jarak_o = 0;
    var ketemu_o = false;
    var ketemu_x = false;
    for(var i = 0; i < arr.length; i++) {
        if(ketemu_o) {
            jarak_o = jarak_o + 1;
            if(arr[i] == 'x') {
                ketemu_x = true;
                // console.log(i + ' ' +ketemu_o + '   ' + arr[i] + ' '+ jarak_o);
                break;
            }
        }
        if(arr[i] == 'o') {
            ketemu_o = true;
        }
            // console.log(i + ' ' +ketemu_o + '   ' + arr[i] + ' '+ jarak_o);
    }
    if(ketemu_o && ketemu_x) {
       return jarak_o;
    }
    else {return 0}
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['', ' ', ' ', ' ', 'x', 'x', 'o', 'x'])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2