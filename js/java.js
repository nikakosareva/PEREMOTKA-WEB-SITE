document.addEventListener('DOMContentLoaded', function () {
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.8] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.posterbutterfly');
      
      for (let elm of elements) {
        observer.observe(elm);
      }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(entr) {
            entr.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-two');
              }
            });
          }
          
          let option = {
            threshold: [0.9] };
          let observe = new IntersectionObserver(onEntry, option);
          let element = document.querySelectorAll('.posterme');
          
          for (let elm of element) {
            observe.observe(elm);
          }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(ent) {
            ent.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-three');
              }
            });
          }
          
          let optio = {
            threshold: [0.7] };
          let observ = new IntersectionObserver(onEntry, optio);
          let elemen = document.querySelectorAll('.girl');
          
          for (let elm of elemen) {
            observ.observe(elm);
          }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(en) {
            en.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-four');
              }
            });
          }
          
          let opti = {
            threshold: [0.6] };
          let obser = new IntersectionObserver(onEntry, opti);
          let eleme = document.querySelectorAll('.man');
          
          for (let elm of eleme) {
            obser.observe(elm);
          }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(e) {
            e.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-five');
              }
            });
          }
          
          let opt = {
            threshold: [1.0] };
          let obse = new IntersectionObserver(onEntry, opt);
          let elem = document.querySelectorAll('.boy');
          
          for (let elm of elem) {
            obse.observe(elm);
          }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(ex) {
            ex.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-six');
              }
            });
          }
          
          let op = {
            threshold: [0.5] };
          let obs = new IntersectionObserver(onEntry, op);
          let ele = document.querySelectorAll('.case-girl');
          
          for (let elm of ele) {
            obs.observe(elm);
          }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(ep) {
            ep.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-seven');
              }
            });
          }
          
          let o = {
            threshold: [0.75] };
          let ob = new IntersectionObserver(onEntry, o);
          let el = document.querySelectorAll('.case-man');
          
          for (let elm of el) {
            ob.observe(elm);
          }
    });

    // document.addEventListener('DOMContentLoaded', function () {
    //     function onEntry(ek) {
    //         ek.forEach(change => {
    //           if (change.isIntersecting) {
    //            change.target.classList.add('element-show-eight');
    //           }
    //         });
    //       }
          
    //       let a = {
    //         threshold: [0.95] };
    //       let o = new IntersectionObserver(onEntry, a);
    //       let e = document.querySelectorAll('.case-boy');
          
    //       for (let elm of e) {
    //         o.observe(elm);
    //       }
    // });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(poster) {
            poster.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-ten');
              }
            });
          }
          
          let one = {
            threshold: [0.85] };
          let two = new IntersectionObserver(onEntry, one);
          let three = document.querySelectorAll('.events-posterme');
          
          for (let elm of three) {
            two.observe(elm);
          }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(posters) {
            posters.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-eleven');
              }
            });
          }
          
          let oneone = {
            threshold: [0.65] };
          let twotwo = new IntersectionObserver(onEntry, oneone);
          let threethree = document.querySelectorAll('.events-posterbutterfly');
          
          for (let elm of threethree) {
            twotwo.observe(elm);
          }
    });

    document.addEventListener('DOMContentLoaded', function () {
        function onEntry(posterrs) {
            posterrs.forEach(change => {
              if (change.isIntersecting) {
               change.target.classList.add('element-show-twelve');
              }
            });
          }
          
          let oneoneone = {
            threshold: [0.55] };
          let twotwotwo = new IntersectionObserver(onEntry, oneoneone);
          let threethreethree = document.querySelectorAll('.events-prostor');
          
          for (let elm of threethreethree) {
            twotwotwo.observe(elm);
          }
    });







//     function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('element-show');
//     }
//   });
// }

// let options = {
//   threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.posterbutterfly');

// for (let elm of elements) {
//   observer.observe(elm);
// }

// let posterbutterfly = document.querySelector('.posterbutterfly');
//     window.addEventListener('scroll', function() {
//         let scrollPosition = window.scrollY;
//         let newPosition = 50 - scrollPosition / 10;

//         posterbutterfly.style.left = newPosition + '%';
//     });


//     $('.fullmenu').click(function() {
//         $('.introduction').toggleClass('none');
//   });


//     $(".katushka1").click(function() {
//         $(".lenta").toggle("slide", { direction: "right" }, 1000);
//     });