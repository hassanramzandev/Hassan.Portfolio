 window.addEventListener('scroll',function(){
              
      var navmenu=document.getElementById('navLinks');
           if(navmenu.classList.contains('show')){
            if(navmenu.classList.remove('show'));
           }
    });
     emailjs.init("lyEhKHgTvN8fAmLMY");

     const form=document.getElementById('contact');

     form.addEventListener('submit',function(e)
{
    e.preventDefault();
    emailjs.sendForm(
        "service_jzv5fz6",
        "template_kys5bqe",
          form
    )
    .then(function(){
        
         alert('Message sent Successfully')
          form.reset();
          })

    .catch(function(error)
{
    alert('error details' + JSON.stringify(error));

    console.log(error);
     });
});