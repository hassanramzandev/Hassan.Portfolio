 window.addEventListener('scroll',function(){
              
      var navmenu=document.getElementById('navLinks');
           if(navmenu.classList.contains('show')){
            if(navmenu.classList.remove('show'));
           }
    });
     emailjs.init("az3zbf5-CK_K1w7Va");

     const form=document.getElementById('contact');

     form.addEventListener('submit',function(e)
{
    e.preventDefault();
    emailjs.sendForm(
        "service_jzv5fz6",
        "template_fgros4m",
          form
    )
    .then(function(){
        
         alert('Message sent Successfully')
          form.reset();
          })

    .catch(function(error)
{
    alert('Message failed');

    console.log(error);
     });
});