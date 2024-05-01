jQuery(document).ready(function(){

jQuery(".step-content-wrapper").steps({
  headerTag: "span",
  bodyTag: ".steps-content-block", 
  transitionEffect: "slideLeft",
  cssClass: "tabcontrol",

  labels: {
    previous: "Back"
  },

  onInit: function( ) {
   jQuery(".content.clearfix").css("height", "1204px")
  },

  onStepChanged: function() {
      jQuery(".content.clearfix").find(".steps-content-block.current").children(".step-inner-block").each(function(){
      var _this = jQuery(this).innerHeight();
      console.log(_this);
      jQuery(".content.clearfix").css("height", _this);

      
   });

},

 onFinished:function(){
  jQuery("body").addClass("modal-open");
  jQuery(".custom-modal").addClass("visible")

  jQuery(".modal-close").click(function(){
    jQuery("body").removeClass("modal-open")
    jQuery(".custom-modal").removeClass("visible")
  });
  
 }

  });

  

jQuery(".radio-checkbox-listing").find(".radio-checkbox-list").each(function(){
  console.log (jQuery(this).find("input").html());
});
jQuery(".actions.clearfix ul li a ").addClass("btn")
jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("yellow-btn");
jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("disable")





  jQuery(".actions a[href='#next']").click(function(){
    console.log(jQuery(this).closest(".quiz-section").find(".progress-bar").children("span").animate({width: "+=12.5%"}));
  });

  jQuery(".actions a[href='#previous']").click(function(){
    console.log(jQuery(this).closest(".quiz-section").find(".progress-bar").children("span").animate({width: "-=12.5%"}));
  });

  
  
});

