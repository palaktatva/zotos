function get_height() {
  jQuery(".content.clearfix").find(".steps-content-block.current").children(".step-inner-block").each(function () {
    var _this = jQuery(this).innerHeight();
    jQuery(".content.clearfix").css("min-height", _this);
  });

  // function get_change(){
  //   jQuery(".radio-checkbox-listing").find("input").change(function(){
  //     var result = jQuery(this).val();
  //     if(result = 0){
  //       jQuery(".actions a[href='#next']").addClass("disable");
  //     }
  //     else{
  //       jQuery(".actions a[href='#next']").removeClass("disable");
  //     }

  //   });
  // }
}

jQuery(".step-content-wrapper").steps({
  headerTag: "span",
  bodyTag: ".steps-content-block",
  transitionEffect: "slideLeft",
  cssClass: "tabcontrol",
  saveState: "true",
  // forceMoveForward: "true",

  labels: {
    previous: "Back"
  },

  onInit: function () {
    get_height();

    jQuery(".radio-checkbox-listing").find("input").change(function () {
      jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");
    }); 

     },

  onStepChanged: function (currentIndex, priorIndex, event) {
    get_height();
  
    if(event > priorIndex){
          jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");
      }

   else{
    jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("disable");
    // if(jQuery("input[type='radio']:checked, input[type='checkbox']:checked")){
    //   jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");
    // }
    jQuery(".radio-checkbox-listing").find("input").change(function () {
        jQuery(".actions a[href='#next'], .actions a[href='#finish']").removeClass("disable");
    });
   }

  },

  onFinished: function () {

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



jQuery(".actions.clearfix ul li a ").addClass("btn")
jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("yellow-btn");
jQuery(".actions a[href='#next'], .actions a[href='#finish']").addClass("disable");


jQuery(".actions a[href='#next']").click(function () {
  (jQuery(this).closest(".quiz-section").find(".progress-bar").children("span").animate({ width: "+=10%" }));
});

jQuery(".steps-content-block").last().find("input").click(function () {
  jQuery(".quiz-section").find(".progress-bar").children("span").animate({ width: "+=10%" })
});

jQuery(".actions a[href='#previous']").click(function () {
  (jQuery(this).closest(".quiz-section").find(".progress-bar").children("span").animate({ width: "-=10%" }));
});



jQuery(document).resize(function(){
  // get_height();
})