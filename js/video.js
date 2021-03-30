var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	document.querySelector('#play').addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		if (!(video.volume < 1)) {
			document.querySelector("#volume").innerHTML = "100%";
		}
	});

	document.querySelector('#pause').addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.querySelector('#slower').addEventListener("click", function() {
		video.playbackRate -= (0.05 * video.playbackRate);
		console.log(video.playbackRate);
	});

	document.querySelector('#faster').addEventListener("click", function() {
		video.playbackRate = video.playbackRate/0.95;
		console.log(video.playbackRate);
	});

	document.querySelector('#mute').addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
			document.querySelector('#mute').innerHTML = "Unmute";
		}
		else {
			video.muted = false;
			document.querySelector('#mute').innerHTML = "Mute";
		}
	});

	document.querySelector('#skip').addEventListener("click", function() {
		if (video.currentTime + 15 < video.duration) {
			console.log("Original location " + video.currentTime);
			video.currentTime = video.currentTime + 15;
		}
		else {
			console.log("Going back to beginning");
			video.currentTime = 0;
		}
		console.log("New location " + video.currentTime);
		video.play();
	});

	document.querySelector('#slider').addEventListener("change", function() {
		video.volume = document.querySelector('#slider').value / 100;
		document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
	});

	document.querySelector('#vintage').addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector('#orig').addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});

});

