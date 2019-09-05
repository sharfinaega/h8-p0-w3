
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    input.splice(1, 1, input[1] + ' Elsharawy');
    input.splice(2, 1, 'Propinsi '+ input[2]);
    console.log(input);
    var tgl = input[3].split('/');
    switch (parseInt(tgl[1])) {
        case 1:
            console.log('Januari');
            break;
        case 2:
            console.log('Februari');
            break;
        case 3:
            console.log('Maret');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('Mei');
            break;
        case 6:
            console.log('Juni');
            break;
        case 7:
            console.log('Juli');
            break;
        case 8:
            console.log('Agustus');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('Oktober');
            break;
        case 11:
            console.log('November');
            break;
        case 11:
            console.log('Desember');
            break;
        default:
    }
    tgl.sort(function(a,b){return b-a});
    console.log(tgl);
    console.log(tgl.reverse().join('-'));
    console.log(input[1].slice(0, 15));
}

dataHandling2(input);