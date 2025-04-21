document.addEventListener('DOMContentLoaded', () => {
    const dropdownBackground = document.querySelector('.dropdown-background');
    const navContainer = document.getElementById('nav-container');

    console.log('Dropdown background:', dropdownBackground); // Debug log
    console.log('Nav container:', navContainer); // Debug log

    if (!dropdownBackground) {
        console.error('Dropdown background element not found');
        return;
    }

    if (!navContainer) {
        console.error('Nav container element not found');
        return;
    }

    navContainer.addEventListener('mouseover', (event) => {
        const navItem = event.target.closest('.nav-item.dropdown');
        if (navItem) {
            console.log('Mouse enter on:', navItem);
            dropdownBackground.style.display = 'flex';
        }
    });

    navContainer.addEventListener('mouseout', (event) => {
        const navItem = event.target.closest('.nav-item.dropdown');
        if (navItem) {
            console.log('Mouse leave on:', navItem);
            dropdownBackground.style.display = 'none';
        }
    });
});