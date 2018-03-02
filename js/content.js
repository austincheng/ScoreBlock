getRidOfATags();
getRidOfTHTags();
getRidOfScoreClass();

function getRidOfATags() {
	var midtermElements = [];
	var allA = document.getElementsByTagName("a");
	var index = 0;

	for (var i = 0; i < allA.length; i++) {
		if (allA[i].textContent.toLowerCase().indexOf("midterm") >= 0 || 
			allA[i].textContent.toLowerCase().indexOf("test") >= 0 ||
			allA[i].textContent.toLowerCase().indexOf("exam") >= 0) {
			midtermElements[index] = allA[i];
			index++;
		}
	}

	for (var i = 0; i < midtermElements.length; i++) {
		var a = midtermElements[i];
	    a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode);
	}
}

function getRidOfTHTags() {
	var midtermElements = [];
	var allTH = document.getElementsByTagName("th");
	var index = 0;

	for (var i = 0; i < allTH.length; i++) {
		if (allTH[i].textContent.toLowerCase().indexOf("midterm") >= 0 || 
			allTH[i].textContent.toLowerCase().indexOf("test") >= 0 ||
			allTH[i].textContent.toLowerCase().indexOf("exam") >= 0) {
			midtermElements[index] = allTH[i];
			index++;
		}
	}

	for (var i = 0; i < midtermElements.length; i++) {
		var th = midtermElements[i];
	    th.parentNode.parentNode.removeChild(th.parentNode);
	}
}

function getRidOfScoreClass() {
	var scores = [];
	var scoreClass = document.getElementsByClassName("submissionStatus--score")

	for (var i = 0; i < scoreClass.length; i++) {
		scoreClass[i].innerText = "";
	}
}