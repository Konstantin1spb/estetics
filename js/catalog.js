$(document).ready(function(){
  document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
      item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-item--active')) {
          parent.classList.remove('accordion-item--active');
        }
        else {
          document
            .querySelectorAll('.accordion-item')
            .forEach((child) => child.classList.remove('accordion-item--active'))

            parent.classList.add('accordion-item--active');
        }
      }))


  /*  accTrigger = document.querySelectorAll('.accordion-item__trigger');

    accTrigger.forEach((item) => 
      item.addEventListener('click', () => {

        accContent = document.querySelectorAll('.accordion-item__content');

        if(accContent.style.maxHeight) {
          accContent.forEach((el) => el.style.maxHeight = null)

        } else {
          accContent.forEach((el) => el.style.maxHeight = null)
          accContent.style.maxHeight = content.scrollHeight + 'px'
        }
      }))*/

      $(function() {
        $('.product__like').click(function() {
        $(this).toggleClass('active');
        });
      });


      const catalogSwitcherOne = document.querySelector(".catalog__switch-1");
      const catalogSwitcherTwo = document.querySelector(".catalog__switch-2");

      const product = document.querySelectorAll(".product");

      catalogSwitcherTwo.addEventListener("click", function() {
        catalogSwitcherOne.classList.remove('active');
        catalogSwitcherTwo.classList.add('active');

        product.forEach(function(item) {
          item.classList.add('active');
        });
      });

      catalogSwitcherOne.addEventListener("click", function() {
        catalogSwitcherTwo.classList.remove('active');
        catalogSwitcherOne.classList.add('active');

        product.forEach(function(item) {
          item.classList.remove('active');
        });
      });



      $(".polzunok-5").slider({
      min: 0,
      max: 10000,
      values: [0, 10000],
      range: true,
      animate: "fast",
      slide : function(event, ui) {    
          $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
          $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
      }    
  });
  $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
  $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
  $(".polzunok-container-5 input").change(function() {
      var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
      opt_left = $(".polzunok-5").slider("option", "min"),
      where_right = $(".polzunok-5").slider("values", 1),
      input_right = $(".polzunok-input-5-right").val().replace(/[^0-0]/g, ''),    
      opt_right = $(".polzunok-5").slider("option", "max"),
      where_left = $(".polzunok-5").slider("values", 0); 
      if (input_left > where_right) { 
          input_left = where_right;
      }
      if (input_left < opt_left) {
          input_left = opt_left; 
      }
      if (input_left == "") {
      input_left = 0;    
      }        
      if (input_right < where_left) { 
          input_right = where_left; 
      }
      if (input_right > opt_right) {
          input_right = opt_right; 
      }
      if (input_right == "") {
      input_right = 0;    
      }    
      $(".polzunok-input-5-left").val(input_left); 
      $(".polzunok-input-5-right").val(input_right); 
      if (input_left != where_left) {
          $(".polzunok-5").slider("values", 0, input_left);
      }
      if (input_right != where_right) {
          $(".polzunok-5").slider("values", 1, input_right);
      }
  });
});  