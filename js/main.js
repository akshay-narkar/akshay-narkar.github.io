const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");


// main toggle
menuBtn.addEventListener('click', () => {
  toggle();
})

// toggle on item click if open 

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    if (menuBtn.classList.contains('open')) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
}

//Form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }



        form.classList.add('was-validated')
      }, false)
    })
})()



//Script for form to sheets

$.fn.serializeObject = function () {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }

      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

// to clean url parameters 
var clean_uri = location.protocol + "//" + location.host + location.pathname;
window.history.replaceState({}, document.title, clean_uri);


var form = document.querySelector("#contact-form");
var $form = $('form#contact-form'),
  url = 'https://script.google.com/macros/s/AKfycbzI8ZqKPixKqiW4Mzz2j_bik0q6s89Q7NgAtcCicnyq-ArTL3BqtoFgjw_r9EBZl2JBhw/exec'


form.addEventListener('submit', function (e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  else {
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject(),
      success: function (data, textStatus, jqXHR) {
        console.log(jqXHR.status);
        window.location.href = "/index.html";
      },
      complete: function (xhr, status) {
        if (status == 'success')
          location.href = 'index.html';
      }

    })
    alert("Thanks for reaching out! I'll get back to you ASAP.")
  }

}, false)




// Arrows
// const langCollapse = document.getElementById("")
const collapseItem = document.querySelectorAll(".Collapsed");

collapseItem.forEach(item => {
  if (item.parentElement.parentElement.parentElement.parentElement.children[1].classList.contains("show")) {
    item.parentElement.parentElement.children[1].children[0].classList.add("bi-chevron-down");
  }
  item.addEventListener('click', () => {

    item.parentElement.parentElement.children[1].children[0].classList.toggle("bi-chevron-down");
    item.parentElement.parentElement.children[1].children[0].classList.toggle("bi-chevron-right");
  })
});

// const item2 = document.querySelectorAll(".Collapseds");


// item2.forEach(item1 => {
//   if (item1.parentElement.parentElement.parentElement.parentElement.children[1].classList.contains("show")) {
//     item1.parentElement.parentElement.children[1].children[0].classList.add("bi-chevron-down");
//   }
//   item1.addEventListener('click', () => {

//     item1.parentElement.parentElement.children[1].children[0].classList.toggle("bi-chevron-down");
//     item1.parentElement.parentElement.children[1].children[0].classList.toggle("bi-chevron-right");
//   })

// });
  // /html/body / section[3] / div / div / div[2] / div / div[1] / div[1] / div / div[1] / button


  //   / html / body / section[3] / div / div / div[2] / div / div[1] / div[1] / div / div[1] / button





