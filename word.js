let checkBtn = document.getElementById("checkBtn")
let hintMsg = document.getElementById("hintMsg")
let placholder = document.getElementById("placholder")
let mainDiv = document.getElementById("mainDiv")
let msg = document.getElementById("mssg")
let popupDiv = document.getElementById("popupDiv")
let iFsTATE = document.getElementById("IFsTATE")
let popBtn = document.getElementById("popBtn")
let alertBox = document.getElementById("alertBox")
let thumSpan = document.getElementById("thumSpan")
let hintdynmcMsg = ['Most popular web language.', 'most usage in AI.', 'a relational database system by Oracle', 'provides JSON-like data base.', 'most papular frame work is laravel.', 'define styles for your web pages.', ' programming language for all Apple platforms.']
const words = ['javascript', 'python', 'mySql', 'mongoDB', 'php', 'css', 'swift'];
//     alert(6555)
// })
// ===========WHEN POPUP SHOWS THEN CREATE WORD CALLED ON BUTTON START========================
function pop() {

    createWord()
    startTimer()
    // console.log("called pop");
}


// ===========WHEN POPUP SHOWS THEN CREATE WORD CALLED ON BUTTON END========================
// word showing/
popupDiv.addEventListener("click", () => {
    popupDiv.classList.toggle("popup-div-hidden")
})
let randonNmbrGenerator;
const createWord = () => {

    const inputElement = document.getElementById("anseInput");
    const input = inputElement.value.trim();
    if (input === "") {
        console.log("Answer is mandatory. Please fill in the answer.");
        alertBox.innerHTML = `

        <div class="alerdiv">
        <div class="alerContent" >
        <span> <i class="fa-solid fa-triangle-exclamation"></i>Kindly Enter Word.</span>
        </div>
        </div>
        
        `
        setTimeout(() => {
            alertBox.innerHTML = ``
        }, 2500);
        return; // Stop execution of the function
    }

    randonNmbrGenerator = Math.floor(Math.random() * words.length)
    console.log(randonNmbrGenerator);
    let newTempWord = words[randonNmbrGenerator]
    console.log(newTempWord);
    // const inputElement = document.getElementById("anseInput");
    // const input = inputElement.value.toLowerCase();


    //------------Placing word in hindt---------
    let hintdynmcMsgArry = hintdynmcMsg[randonNmbrGenerator]
    // console.log(hintdynmcMsgArry);
    hintMsg.innerHTML = `${hintdynmcMsgArry}`
    //-----------Placing word in hindt end-----------
    let ranword = suffle(newTempWord.split("")).join("")
    // console.log(ranword);
    let demo = newTempWord = ranword
    // console.log(demo);
    let msg = document.getElementById("mssg")
    msg.innerHTML = `${demo}`
    console.log(input);



    ////---------------CHEECKING IF STATE-------------

    if (words.includes(input)) {
        console.log("thumb");
        thumSpan.innerHTML = `

        <div class="thumb_div">

            <span> <i class="fa-regular fa-thumbs-up"></i></span>

        </div>      
        `
        setTimeout(() => {
            thumSpan.innerHTML = ""
        }, 500);

    }
    inputElement.value = ""    ////------INPUT FIELD CHECK IF EMPTY-----------


    ////------INPUT FIELD CHECK IF EMPTY END------------
    ////---------------CHEECKING IF STATE END----------




}




// Add the event listener when the page loads









//ON LOAD SCRREN BUUTON
let startBtn = document.getElementById("startBtnn")
startBtn.addEventListener('click', () => {

    // createWord()

    console.log(startBtn.classList.remove("startBtnHidden"));
    mainDiv.classList.toggle("hidden")
    placholder.classList.toggle("hidden")
    msg.classList.toggle("hidden")
    placholder.classList.toggle("hidden")
    startTimer()
})
//ON LOAD SCRREN BUUTON
// =========================

checkBtn.addEventListener('click', () => {
    // checkBtn.innerHTML = "GUESS WORD"
    createWord()
    // checkMatch();
    startTimer()
})


// console.log(Boolean(startBtn));

function suffle(arry) {
    // console.log(arry);
    for (i = arry.length - 1; i > 0; i++) {
        // console.log(arr.length - 1);
        let j = Math.floor((Math.random() * (i + 1)))
        // let j = Math.floor((Math.random() * i))
        // console.log(j + "  j", i + "i");
        // console.log(i);
        let tem = arry[i]
        arry[i] = arry[j]
        arry[j] = tem //3
        // console.log(arry);
        let arr1 = []
        arr1.push(arry)
        // console.log(arr1);
        break
    }
    return arry
}
// let timesecond = 60; // Set the initial time in seconds
// console.log(popupDiv.innerHTML);




function startTimer() {

    let timesecond = 10;
    let timer = document.getElementById("timer");
    const countdown = setInterval(() => {
        timesecond--;
        timer.innerHTML = `${timesecond}`;
        if (timesecond <= 0 || timesecond < 1) {
            clearInterval(countdown);
            // Swal.fire('Any fool can use a computer')
            // createWord()
            // createWord()
            // startTimer()
            popupDiv.classList.toggle("popup-div-hidden")

            popupDiv.innerHTML = `

           <div class="popup-div " data-aos="zoom-in">
            <div class="popup-box ">
                <i class="oop">Oop!</i>
                <h1>You Could'nt Guess Word In Given Time.</h1>
                <button class="pop-btn" onClick="pop()"  id="popBtn">Next Word<i class="fa-solid fa-arrow-right arrow"></i></button>
            </div>
        </div>
            `



        }
    }, 1000);

    checkBtn.addEventListener("click", () => {
        if (timesecond < 9) {
            timer.innerHTML = 0
            clearInterval(countdown)
        }
    })
}

// ------------cheching anser-----------











































































































































































































































































// popBtn.addEventListener("click", () => {
//     // popupDiv.classList.toggle("popup-div-hidden")
//     createWord()
//     startTimer()
//     alert()
// })
