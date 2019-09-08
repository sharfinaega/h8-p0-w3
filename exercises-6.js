
function angkaPalindrome(num) {
	if (num < 9) {
		return num + 1;
    }
	
	for (var i = num; i < num+1; i++) {
		i_dibalik = String(i).split("").reverse().join("");
		if (i == i_dibalik) {
			return i;
		} else {
			num++;
		}
	}
}

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001