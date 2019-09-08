function pasanganTerbesar(num) {
    
    var array_num = String(num).split('');
    var array_gabung = [];
    for(var i = 0; i < array_num.length -1; i++) {
        array_gabung.push(array_num[i] + array_num[i+1])
    }
    array_gabung.sort(function(a, b){return b-a})
    return array_gabung[0];
  }


  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99