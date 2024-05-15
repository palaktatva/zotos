function get_height() {
  jQuery(".content.clearfix").find(".steps-content-block.current").children(".step-inner-block").each(function () {
    var _this = jQuery(this).innerHeight();
    jQuery(".content.clearfix").css("min-height", _this);
  });
  }

jQuery(document).ready(function(){

  jQuery(".step-content-wrapper").steps({
    headerTag: "span",
    bodyTag: ".steps-content-block",
    transitionEffect: "slideLeft",
    cssClass: "tabcontrol",
    saveState: "true",
    labels: {
      previous: "Back"
    },
  
    onInit: function (currentIndex) {
           
      get_height();
      jQuery(".actions a[href='#previous']").hide();
      // jQuery for add class  
      jQuery(".actions.clearfix ul li a ").addClass("btn")
      jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("yellow-btn");
      jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("disable");
      
      // jQuery for next and previous button
        jQuery(".steps-content-block.current").find(".radio-checkbox-listing").each(function(){
          jQuery(this).find("input").change(function(){
            jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");
          })       
        });
       },
  
      onStepChanged: function (currentIndex, priorIndex, event) {
        
        get_height(); 

        // animate progress bar jquery
        var currentIndex = jQuery(".step-content-wrapper .steps .current").index();
        var totalsteps = jQuery(this).find(".steps-content-block").length - 1;
        var progress = ((currentIndex) * 100) / totalsteps;                  
        jQuery(".progress-bar").find("span").css("width", progress + "%");

        jQuery(".actions a[href='#previous']").show(500); 
        if(currentIndex == totalsteps || currentIndex == 0){
          jQuery(".actions a[href='#previous']").hide(125);
        }
        
        jQuery("html, body").animate({
          scrollTop: 0
        }, 500);   
        
        // jQuery for next and previous button
       if(event > priorIndex){
            jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");                
          }
  
       else{
       jQuery(".steps-content-block.current").find(".radio-checkbox-listing").each(function(){
       var result = jQuery(this).find("input[type='radio']:checked , input[type='checkbox']:checked")
       if(result.length == 0){
        jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("disable");
       }
       else{
        jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");
       }  
       jQuery(this).find("input").change(function(){
        jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");
      })
            
      });
    
      }
        
    
  
     
    },
  
    onFinished: function () {
  
      //finished popup menu
  
      jQuery("body").addClass("modal-open");
      jQuery(".custom-modal").addClass("visible");
  
      setTimeout(function () {
        jQuery(".custom-modal").addClass("fadein");
      }, 125);
  
      jQuery(".modal-close").click(function () {
        jQuery("body").removeClass("modal-open")
        jQuery(".custom-modal").removeClass("fadein")
        setTimeout(function () {
          jQuery(".custom-modal").removeClass("visible");
        }, 125);
      });
  
    },

    
  });
  

})   


$(window).resize(function(){
  get_height();
});
