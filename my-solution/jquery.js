
var nums = [0,0,0,0,0];
var names = ["lily", "lucy", "tony", "james", "tom"];

for (var i=1; i<nums.length+1; i++){
	var num = nums[i-1];
	var elem = document.createElement("h2");
	elem.textContent = names[i-1];
	document.getElementById('options').appendChild(elem);
	elem.addEventListener('click', (function(numCopy, iCopy) {
		return function() {
			$('#clicks').html((++numCopy) + 'Clicks');
			$('#name').html('Name:' + names[iCopy-1]);
			document.getElementById("picture").src = 'cat'+iCopy+'.jpg';
			nums[iCopy-1]++;
		}
	})(num, i));
};
