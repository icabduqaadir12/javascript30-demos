const inputs = document.querySelectorAll('input');

function handleUpdate() {
    const suffix = this.dataset.size || '';
    const valueWithUnit = this.value + suffix;
    document.documentElement.style.setProperty(`--${this.name}`, valueWithUnit)
    document.getElementById(`${this.name}-value`).textContent = valueWithUnit;
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));