let page = document.querySelector('.page');
let btnValid = document.querySelector('.btn-valid');
let btnInvalid = document.querySelector('.btn-invalid');

function showNotification(type, message) {
    let existingNotifies = document.querySelectorAll('.notify');
    let offset = existingNotifies.length * 60; 

    const notifyHTML = `
        <div class="notify ${type}" style="bottom: ${offset}px;">
            <button class="close">X</button>
            <p class="text">${message}</p>
        </div>
    `;

    page.insertAdjacentHTML('beforeend', notifyHTML);

    const notify = document.querySelectorAll('.notify')[existingNotifies.length];
    const closeBtn = notify.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        notify.classList.add('fade-out');
        setTimeout(() => {
            notify.remove();
            updateNotificationPositions();
        }, 500);
    });
}

function updateNotificationPositions() {
    let notifies = document.querySelectorAll('.notify');
    notifies.forEach((notify, index) => {
        notify.style.bottom = `${index * 60}px`; // Сдвигаем вверх оставшиеся уведомления
    });
}

btnValid.addEventListener('click', () => showNotification('valid', 'Валидное уведомление'));
btnInvalid.addEventListener('click', () => showNotification('invalid', 'Невалидное уведомление'));
