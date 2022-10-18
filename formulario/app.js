//Referenciar los 5 elementos formulario osea cada uno de los inputs usando el metodo queryselector o getelemet
window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')
    //una vez referenciado el formulario agregamos el evento submit con el parametro e y con el metodopreventdefault (desencadena el evento)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    //luego validamos los imputs y capturamos los valores ingresados por el usuario. y para captuarr el valor  asignamos la cosntante 
    const validaCampos = ()=> {
      
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmaValor = passConfirma.value.trim();
     
        //Aqui validamos el campo usuario  atraves de las funciones validaFalla y ValidaOK
        
        if(!usuarioValor){
          
            validaFalla(usuario, 'Campo vacío')
        }else{
            validaOk(usuario)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
         //validando campo password
         const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/       // mino 6 y maximo 18   
         if(!passValor) {
             validaFalla(pass, 'Campo vacío')
         } else if (passValor.length < 8) {             
             validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!passValor.match(er)) { //se usa metod match ocurrencias d de uan expresiion dentrod e una cadena
             validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(pass)
         }

         //validando campo password Confirmación
         if(!passConfirmaValor){
             validaFalla(passConfirma, 'Confirme su password')
         } else if(passValor !== passConfirmaValor) { //comparamos con passConfirma valor y si no es igual pondra el mensaje la pass no coincide
             validaFalla(passConfirma, 'La password no coincide')
         } else {
             validaOk(passConfirma)
         }


    } 
    //definiendo funciones , 

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement //parentElemnent esta propiedad devuelve el elemnto padre del elemento especifico
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje 

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    } //la funcion validar email usando expresiones regulares(son patrones para comparar)luego aplicamos metdo test q evalua email

})