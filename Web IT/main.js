function change_color(image_index) {
	var color;
	switch (image_index) {
		case 1: color="rgb(54, 57, 73, 1)"; break;
		case 2: color="rgb(232, 89, 89, 1)"; break;
		case 3: color="rgb(57, 172, 152, 1)"; break;
	}
	setColor(document.body, color);
}

function setColor(item, color) {
	item.style.backgroundColor = color;
}