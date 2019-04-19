const content = fragmentElement.querySelector('.collapsable-content-card');

const collapseButtons = content.querySelectorAll(".collapse-button");

collapseButtons.forEach(
	element => {
		element.onclick = toggleCollapse;
	}
);

function toggleCollapse(event) {
	const collapseButton = event.target;

	const collapsed = collapseButton.parentElement.parentElement.classList.toggle('collapsed');

	collapsed ? collapseButton.innerHTML = '+' : collapseButton.innerHTML = '-';
}