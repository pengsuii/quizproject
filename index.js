//inisiasi soal dalam quiz
const questions = [
    {
        question: "Suatu langkah untuk menyelesaikan sebuah masalah secara logis dan sistematis adalah ?",
        optionA: "Pseudocode",
        optionB: "Fungsi",
        optionC: "Array",
        optionD: "Algoritma",
        correctOption: "optionD"
    },

    {
        question: "Tipe data apakah yang bisa digunakan jika int x = 9.90 ?",
        optionA: "String",
        optionB: "Float",
        optionC: "Char",
        optionD: "Date",
        correctOption: "optionB"
    },

    {
        question: "Bagian dari program yang memiliki peran sangat penting yang akan mempengaruhi setiap instruksi jalannya program adalah ?",
        optionA: "Array",
        optionB: "Looping",
        optionC: "Variabel",
        optionD: "Tipe Data",
        correctOption: "optionD"
    },

    {
        question: "Tipe data yang menyatakan TRUE FALSE dalam sebuah program adalah ?",
        optionA: "Char",
        optionB: "Int",
        optionC: "Boolean",
        optionD: "Double",
        correctOption: "optionC"
    },

    {
        question: "Sebuah perintah atau struktur yang terus mengulang agar mencapai suatu kondisi adalah ?",
        optionA: "Boolean",
        optionB: "Selection",
        optionC: "Sequence",
        optionD: "Looping",
        correctOption: "optionD"
    },

    {
        question: "Yang bukan termasuk jenis operator yaitu ?",
        optionA: "Variabel",
        optionB: "Penjumlahan",
        optionC: "Aritmatika",
        optionD: "Logika",
        correctOption: "optionA"
    },

    {
        question: "Berikut ini profesi yang membutuhkan kemampuan utama terkait Data Pipeline dan database adalah ?",
        optionA: "Programmer",
        optionB: "ML Engineer",
        optionC: "Data Analys",
        optionD: "Data Engineer",
        correctOption: "optionC"
    },

    {
        question: "Data yang harus diberikan pada komputer disebut ?",
        optionA: "Input",
        optionB: "Output",
        optionC: "Proses",
        optionD: "Start",
        correctOption: "optionA"
    },

    {
        question: "Library atau package yang menyediakan berbagai fitur untuk keperluan pembuatan aplikasi berbasis Web adalah ?",
        optionA: "html/template",
        optionB: "fmt",
        optionC: "encoding/json",
        optionD: "net/http",
        correctOption: "optionD"
    },

    {
        question: "Proses dimana penafsiran suatu pesan dan menterjemahkan menjadi informasi yang berarti adalah pengertian dari",
        optionA: "Translate",
        optionB: "Message",
        optionC: "Encode",
        optionD: "Decode",
        correctOption: "optionD"
    },

    {
        question: "Sebuah teknologi untuk memfasilitasi pertukaran informasi atau data antara dua atau lebih aplikasi perangkat lunak, yang biasanya digunakan dengan format data JSON adalah ?",
        optionA: "Apache",
        optionB: "Database",
        optionC: "API",
        optionD: "IIS",
        correctOption: "optionC"
    },

  
    {
        question: "Berikut ini yang bukan merupakan format data adalah ?",
        optionA: "JSML",
        optionB: "XML",
        optionC: "JSON",
        optionD: "HTML",
        correctOption: "optionA"
    },


    {
        question: "Pengirim mengkodean informasi yang akan disampaikan ke dalam simbol atau isyarat adalah pengertian dari ?",
        optionA: "Decode",
        optionB: "Encode",
        optionC: "Translate",
        optionD: "Message",
        correctOption: "optionB"
    },

    {
        question: "Bentuk umum dalam penulisan pernyataan if yang tepat adalah ?",
        optionA: "if x>y;",
        optionB: "if x-y",
        optionC: "if then;",
        optionD: "if(x>y)",
        correctOption: "optionD"
    },

    {
        question: "Pernyataan yang berfungsi untuk menghentikan perulangan adalah ?",
        optionA: "Break",
        optionB: "Continue",
        optionC: "Return 0",
        optionD: "End",
        correctOption: "optionA"
    },

    {
        question: "Contoh penulisan pemberian nama variabel ialah ?",
        optionA: "nama!",
        optionB: "nama npm",
        optionC: "nama_mahasiswa",
        optionD: "mahasiswa??",
        correctOption: "optionC"
    },

    {
        question: "Simbol untuk menunjukan permulaan maupun akhir dari kegiatan adalah ?",
        optionA: "Terminator",
        optionB: "Display",
        optionC: "Proses",
        optionD: "Decision",
        correctOption: "optionA"
    },

    {
        question: "Secara default indeks array dimulai dari  ?",
        optionA: "10",
        optionB: "1",
        optionC: "0",
        optionD: "11",
        correctOption: "optionC"
    },

    {
        question: "Library atau package yang digunakan untuk menggunakan template HTML Web adalah ?",
        optionA: "JSON",
        optionB: "API",
        optionC: "XML",
        optionD: "html/template",
        correctOption: "optionD"
    },

    {
        question: "Kumpulan dari obyek-obyek dengan karakteristik yang sama adalah pengertian ?",
        optionA: "Class",
        optionB: "Variable",
        optionC: "Group",
        optionD: "Double",
        correctOption: "optionA"
    },

    {
        question: "Nilai atau elemen-elemen data yang dimiliki obyek dalam kelas obyek dan merupakan ciri dari sebuah obyek adalah ?",
        optionA: "Obyek",
        optionB: "Method",
        optionC: "CLass",
        optionD: "Atribut",
        correctOption: "optionD"
    },

    {
        question: "Suatu kelas dapat diturunkan dari kelas yang lain, dimana atribut dari kelas semula dapat diwariskan ke kelas yang baru adalah prinsip ?",
        optionA: "Enkapsulasi",
        optionB: "Inheritance",
        optionC: "Polymorphism",
        optionD: "Properties",
        correctOption: "optionB"
    },

    {
        question: "Nama lain dari kata pewarisan dalam java adalah ?",
        optionA: "Overriding",
        optionB: "Inheritance",
        optionC: "Overloading",
        optionD: "Interface",
        correctOption: "optionB"
    },

    {
        question: "Kesatuan antara data dan fungsi, disebut ?",
        optionA: "Fungsi",
        optionB: "Variabel",
        optionC: "Objek",
        optionD: "Method",
        correctOption: "optionC"
    },

    {
        question: "Keyword pada java yang digunakan untuk mengaplikasikan konsep pewarisan adalah ?",
        optionA: "This",
        optionB: "Super",
        optionC: "Extends",
        optionD: "Static",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}