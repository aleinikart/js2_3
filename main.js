

class Validator{
    constructor(formname){
        this.formname = formname;
    }
    _submiform(){
        let curForm = document.getElementById(this.formname);
        curForm.addEventListener('submit', e => {


            this._isFieldValid('phone', /\+7\(\d{3}\)\d{3}\-\d{2}\d{2}/gi, 'Впишите телефон в формате «+7(000)000-0000»');
            this._isFieldValid('email', /[a-z\.\-]+@[a-z]+\.[a-z]{2,11}/ig, 'Впишите e-mail в формате «mail@mail.com»');
            this._isFieldValid('name', /[a-zа-яё\-\s]+/ig, 'Имя может содержать только буквы и «-»');


            if (document.querySelectorAll('.error').length > 0){
                e.preventDefault();
                alert('Проверьте правильность заполнения');
            } else {

                alert('Форма отправлена!');
            }
        });

    }

    _isFieldValid(name, mask, errorinfo){
        let curField = document.querySelector(`[name="${name}"]`),
            curFieldVal = curField.value;
        if(curFieldVal.match(mask) === null || curFieldVal.match(mask).length > 1 || curFieldVal === ''){
            curField.classList.add('error');
            curField.nextSibling.innerHTML += `<span class="errorinfo">${errorinfo}</span>`;

        }
    }
}