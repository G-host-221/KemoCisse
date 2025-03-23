

src="https://cdn.emailjs.com/dist/email.min.js">  
 
    (function(){  
        emailjs.init("service_o7yyoo5") // Remplacez par votre USER ID EmailJS  
    })();  
    
    document.getElementById('envoyer').addEventListener('click', function(event) {  
        event.preventDefault(); 
        
        const prenom = document.getElementById('prenom').value;  
        const nom = document.getElementById('Nom').value;  
        const sujet = document.getElementById('Sujet').value;  
        const message = document.getElementById('texte').value;  

        emailjs.send("service_o7yyoo5", "service_o7yyoo5", {  
            prenom: prenom,  
            nom: nom,  
            sujet: sujet,  
            message: message  
        })  
        .then(function(response) {  
            alert("Message envoyé avec succès !");  
        }, function(error) {  
            alert("Erreur : " + JSON.stringify(error));  
        });  
    });  
  