const toggleBtn = document.querySelector('#toggleBtn');
const targetElement = document.querySelector('#targetElement');

toggleBtn.addEventListener('click', function() {

    targetElement:classList.toggle('hidden');

    if (targetElement.classList.contains('hidden')) {
        toggleBtn.textContent = 'Show';
    } else {

        toggleBtn.textContent = 'Hide';

    }
});