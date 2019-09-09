
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    input.splice(1, 1, input[1] + ' Elsharawy');
    input.splice(2, 1, 'Propinsi '+ input[2]);
    console.log(input);
    var inputAwal = input[3].split('/');
    var tgl = input[3].split('/');
    var namaBulan = '';
    switch (parseInt(tgl[1])) {
        case 1:
            namaBulan = 'Januari';
            break;
        case 2:
            namaBulan = 'Februari';
            break;
        case 3:
            namaBulan = 'Maret';
            break;
        case 4:
            namaBulan = 'April';
            break;
        case 5:
            namaBulan = 'Mei';
            break;
        case 6:
            namaBulan = 'Juni';
            break;
        case 7:
            namaBulan = 'Juli';
            break;
        case 8:
            namaBulan = 'Agustus';
            break;
        case 9:
            namaBulan = 'September';
            break;
        case 10:
            namaBulan = 'Oktober';
            break;
        case 11:
            namaBulan = 'November';
            break;
        case 11:
            namaBulan = 'Desember';
            break;
        default:
    }
    console.log(namaBulan);
    tgl.sort(function(a,b){return b-a});
    console.log(tgl);
    console.log(inputAwal.join('-'));
    console.log(input[1].slice(0, 15));
}

dataHandling2(input);