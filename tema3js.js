document.querySelector('form').addEventListener('submit', checkForm);

function checkForm(e) {
    const reqFields = document.querySelectorAll('.js-class');
    const radios = document.querySelectorAll('[name=gender]');
    const parent = radios[0].parentElement.parentElement;

    //--------------------------------------------------------------------
    for (let i = 0; i < reqFields.length; i++) {
        const field = reqFields[i];
        if (field.value === '') {
            field.classList.add("js-required");

            field.addEventListener(
                'change',
                () => {
                    field.classList.remove("js-required");
                },
                { once: true }
            );

            e.preventDefault();
        }
    }
    //--------------------------------------------------------------------

    if (!radios[0].checked && !radios[1].checked) {
        parent.classList.add("js-required");

        parent.addEventListener(
            'change',
            () => {
                parent.classList.remove("js-required");
            },
            { once: true }

        );

        e.preventDefault();
    }

}

function showSuccessMessage() {
    if (document.location.search === '') {
        return;
    }

    let x = document.location.search.substring(5).split("=");
    x = x[1].split("&")[0];

    const p = document.createElement('p');
    p.classList.add('valid');

    p.innerHTML = 'Thank you for contacting us, ' + x + "!";

    const form = document.querySelector('body');
    form.prepend(p);

    setTimeout(hideSuccessMessage, 3000);
}


function hideSuccessMessage() {
    document.querySelector('.valid').classList.add('fade-out');
}

window.addEventListener('DOMContentLoaded', showSuccessMessage);

const butonSubmit = document.querySelector('.butonSubmit');
butonSubmit.addEventListener('click', checkForm);



