window.addEventListener('load', function() {
   
    let formCadastrase = document.querySelector('form.formCadastrase');

    let fieldName = document.getElementById('name');
    let fieldEmail = document.getElementById('email');
    let fieldPassword = document.getElementById('senha');


    // verificações antes de enviar dados
    formCadastrase.addEventListener('submit', function(event) {
        let errors = [];

            if (fieldName.value == ''){
                errors.push("O Campo nome não pode estar vazio.\n");
            } else if (fieldName.value.length < 3) {
                errors.push('O Campo nome precisa ter mais de 3 caracteres.\n');
            };

            if (fieldEmail.value == ''){
                errors.push('O Campo E-mail não pode estar vazio.\n');
            } else if (fieldEmail.value.length < 11) {
                errors.push('Campo E-mail invalido!.\n');
            }

            if (fieldPassword.value == ''){
                errors.push('O Campo senha não pode estar vazio.\n');
            } else if (fieldPassword.value.length < 6) {
                errors.push('A senha tem que ter mais que 5 caracteres.\n');
            };
            
           if (errors.length > 0){
            event.preventDefault();
            alert(errors);
           }
        
    })

})