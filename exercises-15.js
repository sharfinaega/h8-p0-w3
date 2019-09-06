
function groupAnimals(animals) {
    var result = []
    for(var i = 0; i < animals.length; i++) {
        var sudahAda = false
        for(var j = 0; j < result.length; j++) {
            if(result[j]) {
                if(result [j][0][0] === animals[i][0]) {
                    sudahAda = true
                    result[j].push(animals[i])
                }
            }
        }
        if(sudahAda === false) {
            result.push([animals[i]])
        }
    }
    return result
}


  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]