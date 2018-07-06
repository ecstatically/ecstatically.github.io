window.onload = function(){
    // modal stuff
    // opening modal
    document.querySelectorAll('.open-modal').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            var src = this.getAttribute('data-src');
            showSelector(src);  
            document.body.classList.add("modal-open");
        })
    });

    // clicking close
    document.querySelector('.modal__close').addEventListener('click', function() {
        toggleDisplayElement(this.closest('.modal'));
        document.body.classList.remove("modal-open");
    });

    // hide on click outside
    
    // $(document).click(function(event) {
    //     //if you click on anything except the modal itself or the "open modal" link, close the modal
    //     if (!$(event.target).closest(".modal,.js-open-modal").length) {
    //       $("body").find(".modal").removeClass("visible");
    //     }
    //   });
      
};

// helper
function toggleDisplayElement(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
function toggleDisplaySelector(selector) {
    var x = document.querySelector(selector);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showSelector(selector) {
    document.querySelector(selector).style.display = "block";
}