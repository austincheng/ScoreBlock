var mode = document.getElementById("mode");

if (mode != null) {
	on();
	mode.addEventListener("click", buttonToggle);
}

function buttonToggle() {
	chrome.storage.sync.get("mode", function(result) {
		if (result.mode == null || result.mode == "on") {
			off();
		} else if (result.mode == "off") {
			on();
		}
	})
}

function on() {
	setMode("on");
	mode.innerText = "Disable Blocker";
}

function off() {
	setMode("off");
	mode.innerText = "Enable Blocker";
}

function setMode(state) {
	chrome.storage.sync.set({"mode": state});
}

