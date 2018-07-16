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
    document.addEventListener('click', function(e) {
        // console.log(e.target);

        if (e.target.classList.contains('modal')) {
            // console.log('modal!');
            // close it cause modal is open but we're not clicking the inner
            toggleDisplayElement(e.target);
            document.body.classList.remove("modal-open");
        }
    });
    
    // hamburger menu
    document.querySelector('.navbar__mobile').addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('opened');
        var links = document.querySelector('.navbar__links');
        links.classList.toggle('opened');
    });
      
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