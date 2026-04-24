const playBtn = document.querySelector(".third-section__play");
const video = document.querySelector(".third-section__video");

playBtn.addEventListener("click", () => {
	video.play();
	video.controls = "true";
	playBtn.style.display = "none";
});

video.addEventListener("ended", () => {
	playBtn.style.display = "block";
});
