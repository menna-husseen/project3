
// let nameInp = document.getElementById("name");

// console.log(nameInp);


// $('#namealert').fadeOut()
// function regEXPInp() {
  
//     var regEXP = /^[a-z]{3,4}$/i;
//     if (regEXP.test(nameInp.value) == true) {
//       // return true;
      

//     } else {
//       // return false;
//       $('#namealert').fadeIn()
//     }
//   }

// regEXPInp();


// -------------name
function regEXPInpName() {
  if (nameValid()) {
      document.getElementById('namealert').classList.replace("d-block", "d-none")


  } else {
      // return false;
      document.getElementById("namealert").classList.replace("d-none", "d-block")
  }
}

function nameValid() {
  return (/^[a-z]{3,4}$/i.test(document.getElementById("name").value))
}

// -------------Email
function regExInpEmail() {
  if (emailValid()) {
      document.getElementById('emailalert').classList.replace("d-block", "d-none")


  } else {
      // return false;
      document.getElementById("emailalert").classList.replace("d-none", "d-block")
  }
}

function emailValid() {
  return (/[a-zA-z].*@.*\.\w+/.test(document.getElementById("email").value))
}

// -------------Phone
function regExInpPhone() {
  if (phoneValid()) {
      document.getElementById('phonealert').classList.replace("d-block", "d-none")


  } else {
      // return false;
      document.getElementById("phonealert").classList.replace("d-none", "d-block")
  }
}

function phoneValid() {
  return (/^01[0125][0-9]{8}$/.test(document.getElementById("phone").value))
}

// -------------Password
function regExInpPass() {
  if (passValid()) {
      document.getElementById('passwordalert').classList.replace("d-block", "d-none")


  } else {
      // return false;
      document.getElementById("passwordalert").classList.replace("d-none", "d-block")
  }
}

function passValid() {
  return (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(document.getElementById("password").value))
}

// -------------RE-Password
function regExInpRePass() {
  if (RepassValid()) {
      document.getElementById('repasswordalert').classList.replace("d-block", "d-none")


  } else {
      // return false;
      document.getElementById("repasswordalert").classList.replace("d-none", "d-block")
  }
}

function RepassValid() {
  return (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(document.getElementById("rePassword").value))
}


// -------------Age
function regExInpAge() {
  if (AgeValid()) {
      document.getElementById('agealert').classList.replace("d-block", "d-none")


  } else {
      // return false;
      document.getElementById("agealert").classList.replace("d-none", "d-block")
  }
}

function AgeValid() {
  return (/^[0-9]{2}$/.test(document.getElementById("age").value))
}





//--------------------------------------------

$(document).ready(function () {
  let boxWidth = $(".side-nav-menu .nav-tab").outerWidth();
  $(".side-nav-menu").css({
    left: -boxWidth,
  });
  $(".open-close-icon").addClass("fa-align-justify");
  $(".open-close-icon").removeClass("fa-x");
});

function openSideNav() {
  $(".side-nav-menu").animate(
    {
      left: 0,
    },
    500
  );

  $(".side-nav-menu").css("backgroundColor", "black");
  $(".open-close-icon").removeClass("fa-align-justify");
  $(".open-close-icon").addClass("fa-x");

  for (let i = 0; i < 6; i++) {
    $(".links li")
      .eq(i)
      .animate(
        {
          top: 0,
        },
        (i + 6) * 100
      );
  }
}

function closeSideNav() {
  let boxWidth = $(".side-nav-menu .nav-tab").outerWidth();
  $(".side-nav-menu").animate(
    {
      left: -boxWidth,
    },
    500
  );

  $(".open-close-icon").addClass("fa-align-justify");
  $(".open-close-icon").removeClass("fa-x");

  $(".links li").animate(
    {
      top: 300,
    },
    500
  );
}

$(".side-nav-menu i.open-close-icon").click(() => {
  console.log("hello");
  if ($(".side-nav-menu").css("left") == "0px") {
    closeSideNav();
  } else {
    openSideNav();
  }
});

async function getTrending() {
  var res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=22ecb718dacbaaf939bf6581b97ca6c2`
  );
  final = await res.json();
  items = final.results;
  console.log(items);
  displaymovie();
}
getTrending();

var baseImage = "https://image.tmdb.org/t/p/w500";
function displaymovie() {
  var cartona = ``;
  for (var i = 0; i < items.length; i++) {
    cartona += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
  <div class="movie shadow rounded position-relative">
    <div class="post">
      <img src="${baseImage + items[i].poster_path}" class="img-fluid rounded">
      <div class="layer d-flex align-items-center ">
        <div class="info p-0">

          <h2>${items[i].title}</h2>
          <p>${items[i].overview}</p>
          <p>${items[i].vote_average}</p>
          <p>${items[i].release_date}</p>

        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

async function getpopular() {
  var res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=22ecb718dacbaaf939bf6581b97ca6c2&language=en-US&page=1`
  );
  var final = await res.json();

  items = final.results;
  console.log(items);
  displaypopular();
}
getpopular();

function displaypopular() {
  var cartona = ``;
  for (var i = 0; i < items.length; i++) {
    cartona += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
  <div class="movie shadow rounded position-relative">
    <div class="post">
      <img src="${baseImage + items[i].poster_path}" class="img-fluid rounded">
      <div class="layer d-flex align-items-center ">
        <div class="info p-0">

          <h2>${items[i].title}</h2>
          <p>${items[i].overview}</p>
          <p>${items[i].vote_average}</p>
          <p>${items[i].release_date}</p>

        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
async function getRated() {
  var res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=22ecb718dacbaaf939bf6581b97ca6c2&language=en-US&page=1`
  );
  var final = await res.json();

  items = final.results;
  console.log(items);
  displayRated();
}
getRated();

function displayRated() {
  var cartona = ``;
  for (var i = 0; i < items.length; i++) {
    cartona += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
  <div class="movie shadow rounded position-relative">
    <div class="post">
      <img src="${baseImage + items[i].poster_path}" class="img-fluid rounded">
      <div class="layer d-flex align-items-center ">
        <div class="info p-0">

          <h2>${items[i].title}</h2>
          <p>${items[i].overview}</p>
          <p>${items[i].vote_average}</p>
          <p>${items[i].release_date}</p>

        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
async function getUpcoming() {
  var res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=22ecb718dacbaaf939bf6581b97ca6c2&language=en-US&page=1`
  );
  var final = await res.json();

  items = final.results;
  console.log(items);
  displayUpcoming();
}
getUpcoming();

function displayUpcoming() {
  var cartona = ``;
  for (var i = 0; i < items.length; i++) {
    cartona += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
  <div class="movie shadow rounded position-relative">
    <div class="post">
      <img src="${baseImage + items[i].poster_path}" class="img-fluid rounded">
      <div class="layer d-flex align-items-center ">
        <div class="info p-0">

          <h2>${items[i].title}</h2>
          <p>${items[i].overview}</p>
          <p>${items[i].vote_average}</p>
          <p>${items[i].release_date}</p>

        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

//----------------------------------------search---------------------------------------------
async function searchByWord(keyWord) {
  var res = await fetch(
    `https://api.themoviedb.org/3/search/keyword?api_key=22ecb718dacbaaf939bf6581b97ca6c2&query=all&page=1`
  );
  var final = await res.json();

  items = final.results;
  console.log(items);
  displaySearchByWord();
}
searchByWord();

function displaySearchByWord() {
  var cartona = ``;
  for (var i = 0; i < items.length; i++) {
    cartona += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
  <div class="movie shadow rounded position-relative">
    <div class="post">
      <img src="${baseImage + items[i].poster_path}" class="img-fluid rounded">
      <div class="layer d-flex align-items-center ">
        <div class="info p-0">

          <h2>${items[i].title}</h2>
          <p>${items[i].overview}</p>
          <p>${items[i].vote_average}</p>
          <p>${items[i].release_date}</p>

        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}





async function search(movie) {
  var res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=22ecb718dacbaaf939bf6581b97ca6c2&language=en-US&query=all&page=1&include_adult=false`
  );
  final = await res.json();
  items = final.results;
  console.log(items);
  displaymovie();
}
search();

var baseImage = "https://image.tmdb.org/t/p/w500";
function displaymovie() {
  var cartona = ``;
  for (var i = 0; i < items.length; i++) {
    cartona += `<div class="col-md-6 col-lg-4 my-3 myM  shadow">
  <div class="movie shadow rounded position-relative">
    <div class="post">
      <img src="${baseImage + items[i].poster_path}" class="img-fluid rounded">
      <div class="layer d-flex align-items-center ">
        <div class="info p-0">

          <h2>${items[i].title}</h2>
          <p>${items[i].overview}</p>
          <p>${items[i].vote_average}</p>
          <p>${items[i].release_date}</p>

        </div>
      </div>
    </div>
  </div>
</div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}