const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const followModal = document.querySelector("#follow-modal");


//modal open function
function openModal(){
    modal.classList.add("modal-active");
    overlay.classList.add("overlay-active");
    console.log("profile modal is open");
};

//modal close function
function closeModal(){
    modal.classList.remove("modal-active");
    overlay.classList.remove("overlay-active");
    console.log("profile modal is closed");
};

function openGit(){
    followModal.classList.add('follow-active');
    overlay.classList.add('overlay-active');
    console.log("follow modal is open");
};

function closeGit(){
    followModal.classList.remove('follow-active');
    overlay.classList.remove('overlay-active');
    console.log("follow modal is closed");
};