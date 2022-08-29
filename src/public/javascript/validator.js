window.addEventListener('load', function() {
   
    let formCadastrase = document.querySelector('form.formCadastrase');

    let fieldName = document.getElementById('name');
    let fieldEmail = document.getElementById('email');
    let fieldPassword = document.getElementById('senha');


    // verificações antes de enviar dados
    formCadastrase.addEventListener('submit', function(event) {
        let errors = [];

            if (fieldName.value == ''){
                errors.push('\nO Campo nome não pode estar vazio');
            } else if (fieldName.value.length < 3) {
                errors.push('\nO Campo nome precisa ter mais de 3 caracteres');
            };

            if (fieldEmail.value == ''){
                errors.push('\nO Campo E-mail não pode estar vazio');
            } else if (fieldEmail.value.length < 11) {
                errors.push('\nCampo E-mail invalido!');
            }

            if (fieldPassword.value == ''){
                errors.push('\nO Campo senha não pode estar vazio.');
            } else if (fieldPassword.value.length < 6) {
                errors.push('\nA senha tem que ter mais que 5 caracteres.');
            };
            
           if (errors.length > 0){
            event.preventDefault();
            alert(errors);
           }
        
    })

})