window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    let page = window.location.pathname.split('/').pop()

    function success() {
      form.reset();
      status.classList.add('success')

      if (page == 'formulario_pt.html') {

            status.innerHTML = "Obrigado por enviar sua mensagem!";

        }

        else if (page == 'formulario_eng.html') {


            status.innerHTML = "Thank you for sending your message!";

        }

        else if (page == 'formulario_esp.html') {

            status.innerHTML = "¡Gracias por enviar su mensaje!"

        }

        else if (page == 'formulario_fr.html') {

            status.innerHTML = "Merci pour envoyer votre message!";

        };

    };

    function error() {
        status.classList.add('error');
      
        if (page == 'formulario_pt.html') {

            status.innerHTML = "Houve um problema! Seu endereço de email é inválido!";

        }

        else if (page == 'formulario_eng.html') {


            status.innerHTML = "There was a problem! Your email address is invalid!";

        }

        else if (page == 'formulario_esp.html') {

            status.innerHTML = "¡Hay un problema, su correo eletrónico es inválido!"

        }

        else if (page == 'formulario_fr.html') {

            status.innerHTML = "Il y a un problème, votre adresse e-mail est invalide!";

        }
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

