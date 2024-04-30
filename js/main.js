
jQuery(document).ready(function(){

jQuery(".step-content-wrapper").steps({
  headerTag: "span",
  bodyTag: ".steps-content-block", 
  transitionEffect: "slideLeft",
  cssClass: "tabcontrol",

  labels: {
    previous: "Back"
  }
  });

  jQuery(".actions a[href='#next'],a[href='#finish']").click(function(){
    console.log(jQuery(this).closest(".quiz-section").find(".progress-bar-inner").children("span").animate({width: "+=10%"}));
  });

  // jQuery(".quiz-section").find(".step-content-wrapper").each(function(){
  //   var step_block_height = jQuery(".steps-content-block").innerHeight();
  //   console.log(step_block_height);
  // })
  
});
