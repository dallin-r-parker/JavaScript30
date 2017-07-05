//querySelector actually returns a NodeList not an array.
// Although they look very similar they're not the same, because they don't have the same
//prototype methods available

const inputs = document.querySelectorAll('.controls input')

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(e => e.addEventListener('change', handleUpdate))
inputs.forEach(e => e.addEventListener('mousemove', handleUpdate))

