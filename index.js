// this function allows our button to be responsive
// with javascript
const buttonRefresh = () => {
	// the .addEventListner allows the page to revert back
	document.querySelector(".rollBtn").addEventListener("click", function () {
		let randomImages = new Array(
			"./images/dice1.png",
			"./images/dice2.png",
			"./images/dice3.png",
			"./images/dice4.png",
			"./images/dice5.png",
			"./images/dice6.png"
		);
		let newRandomImages = new Array(
			"./images/dice1.png",
			"./images/dice2.png",
			"./images/dice3.png",
			"./images/dice4.png",
			"./images/dice5.png",
			"./images/dice6.png"
		);
		// produces random num between 0 and 6
		// randomImages.length is being subtracted since the array starts counting from 0
		// which would be 7 images
		let randomNumber = Math.floor((randomImages.length - 1) * Math.random());
		// lets the img2 className randomize an img
		let newRandomNumber = Math.floor(
			(newRandomImages.length - 1) * Math.random()
		);

		// takes rand img and rand num and outputs a dice img
		document
			.getElementsByClassName("img1")[0]
			.setAttribute("src", randomImages[randomNumber]);
		document
			.getElementsByClassName("img2")[0]
			.setAttribute("src", newRandomImages[newRandomNumber]);

		// checks if the ouput of the two lines above are greater than the other
		if (
			document.getElementsByClassName("img1")[0].getAttribute("src") >
			document.getElementsByClassName("img2")[0].getAttribute("src")
		) {
			document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
		} else if (
			document.getElementsByClassName("img1")[0].getAttribute("src") <
			document.getElementsByClassName("img2")[0].getAttribute("src")
		) {
			document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
		} else {
			document.querySelector("h1").textContent = "Draw! 🤝";
		}
	});
};

const startOver = () => {
    // when using querySelector for a class a period is necesarry before calling
    // the class
	document.querySelector(".refreshBtn").addEventListener("click", () => {
        // delays the location.reload() func by time set
        setTimeout(() => {
            location.reload();
        },500);
    });
};

buttonRefresh();
startOver();