window.addEventListener('load', function() {
   
    let formCadastrase = document.querySelector('form.formCadastrase');

    formCadastrase.addEventListener('submit', function(event) {

        let errors = [];

        let fieldName = document.getElementById('name');
            if (fieldName.value == ''){
                alert('O Campo nome não pode estar vazio')
                errors.push('O Campo nome não pode estar vazio')
            } else if (fieldName.value.length < 3) {
                alert('O Campo nome precisa ter mais de 3 caracteres')
                errors.push('O Campo nome precisa ter mais de 3 caracteres')
            };

       let fieldEmail = document.getElementById('login');
            if (fieldEmail.value == ''){
                alert('O Campo E-mail não pode estar vazio')
                errors.push('O Campo E-mail não pode estar vazio')
            } else if (fieldEmail.value.length < 11) {
                alert('Campo E-mail invalido!')
                errors.push('Campo E-mail invalido!')
            };

        let fieldPassword = document.getElementById('senha');
            if (fieldPassword.value == ''){
                alert('O Campo senha não pode estar vazio')
                errors.push('O Campo senha não pode estar vazio')
            } else if (fieldPassword.value.length < 6) {
                alert('A senha tem que ter mais que 5 caracteres')
                errors.push('A senha tem que ter mais que 5 caracteres')
            };
            
           if (errors.length > 0){
            event.preventDefault();
           }
        
    })

})