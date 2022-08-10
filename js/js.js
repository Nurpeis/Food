// function hideTabContent() {
// 		tabsContent.forEach((item) => {
// 			item.classList.add("hide");
// 			item.classList.remove("show", "fade");
// 		});
// 		tabs.forEach((item) => {
// 			item.classList.remove("tabheader__item_active");
// 		});
// 	}

// 	function showTabContent(i = 0) {
// 		tabsContent[i].classList.add("show", "fade");
// 		tabsContent[i].classList.remove("hide");
// 		tabs[i].classList.add("tabheader__item_active");
// 	}

// 	hideTabContent();
// 	showTabContent();

// 	tabsParent.addEventListener("click", (e) => {
// 		if (e.target && e.target.classList.contains("tabheader__item")) {
// 			tabs.forEach((item, i) => {
// 				if (e.target == item) {
// 					hideTabContent();
// 					showTabContent(i);
// 				}
// 			});
// 		}
// 	});

// 	//timer

// 	const deadline = "2022-08-01";

// 	function getTimeRemaining(endtime) {
// 		let days, hours, minutes, seconds;

// 		const t = Date.parse(endtime) - Date.parse(new Date());

// 		if (t <= 0) {
// 			days = 0;
// 			hours = 0;
// 			minutes = 0;
// 			seconds = 0;
// 		} else {
// 			days = Math.floor(t / (1000 * 60 * 60 * 24));
// 			hours = Math.floor((t / (1000 * 60 * 60)) % 24);
// 			minutes = Math.floor((t / (1000 * 60)) % 60);
// 			seconds = Math.floor((t / 1000) % 60);
// 		}

// 		return {
// 			total: t,
// 			days: days,
// 			hours: hours,
// 			minutes: minutes,
// 			seconds: seconds,
// 		};
// 	}

// 	function getZero(num) {
// 		if (num >= 0 && num < 10) {
// 			return `0${num}`;
// 		} else {
// 			return num;
// 		}
// 	}

// 	function setClock(selector, endtime) {
// 		const timer = document.querySelector(".timer");
// 		const days = timer.querySelector("#days");
// 		const hours = timer.querySelector("#hours");
// 		const minutes = timer.querySelector("#minutes");
// 		const seconds = timer.querySelector("#seconds");
// 		const timeInterval = setInterval(updateClock, 1000);

// 		updateClock();

// 		function updateClock() {
// 			const t = getTimeRemaining(endtime);

// 			days.innerHTML = getZero(t.days);
// 			hours.innerHTML = getZero(t.hours);
// 			minutes.innerHTML = getZero(t.minutes);
// 			seconds.innerHTML = getZero(t.seconds);
// 		}
// 		if (timeInterval <= 0) {
// 			clearInterval();
// 		}
// 	}

// 	setClock("timer", deadline);

// 	//modal

// 	const modalBtn = document.querySelectorAll("[data-modal]");
// 	const modalClose = document.querySelector("[data-close]");
// 	const modal = document.querySelector(".modal");

// 	modalBtn.forEach((item) => {
// 		item.addEventListener("click", () => {
// 			modal.classList.toggle("show");
// 			document.body.style.overflow = "hidden";
// 		});
// 	});

// 	function closeModal() {
// 		modal.classList.toggle("show");
// 		document.body.style.overflow = "";
// 	}

// 	modalClose.addEventListener("click", () => {
// 		closeModal();
// 	});

// 	modal.addEventListener("click", (e) => {
// 		if (e.target === modal) {
// 			closeModal();
// 		}
// 	});
// });
