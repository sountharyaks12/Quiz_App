let start = () => {
    let quiz = [
        {
            q: "1.Html Stands for?",
            a: ["Hyper text language", "hyper tend programing language", "Hyper text markup language", "hyper tech mark language"],
            crt: "Hyper text markup language"
        },
        {
            q: "2. What does CSS stand for?",
            a: ["Computer Style Sheets", "Cascading Style Sheet", "Common Style Sheets", "None of these"],
            crt: "Cascading Style Sheet"

        },
        {
            q: "3.What is the correct way to add a comment in HTML ? ",
            a: [" --comment ", " / * Comment * / ", "/ * Comment * / ", " !- - Comment - - "],
            crt: " !- - Comment - - "

        },
        {
            q: "4. Which attribute is used to provide alternative text for an image in HTML?",
            a: ["title", " alt ", "src", "None of the  above"],
            crt: " alt "

        },
        {
            q: "5.What is the correct HTML element for inserting a line break ?",
            a: ["lb", " br ", "break", "none of the above"],
            crt: " br "

        }
    ];

    document.getElementById("stbtn").style.display = "none";
    document.getElementById("line1").style.display = "none";

    let main = document.getElementById("htmlMain");
    let timer = document.querySelector(".timer");
    main.appendChild(timer);
    let quizDiv = document.getElementById("quizDiv");
    quizDiv.className = "qDiv";

    let nextb = document.querySelector("#nextb");
    main.appendChild(nextb);
    nextb.className = "nbtn";

    let current = 0;
    let score = 0;
    let selectedAnswer;


    let displayQues = (indexvalues) => {
        quizDiv.innerHTML = "";
        clearInterval(timer);

        if (indexvalues < quiz.length) {
            let timeleft = 5;
            timer.innerHTML = `time left: ${timeleft}`;
            timer = setInterval(() => {
                // timeleft--;
                timer.innerHTML = `Time left: ${timeleft}`;
                console.log("Time left:", timeleft);
                if (timeleft <= 0) {
                    clearInterval(timer)
                    next();
                } else {
                    timeleft--;
                    timer.innerHTML = `Time left: ${timeleft}`;
                }
            }, 1000);

            let question = document.createElement("h2");
            quizDiv.appendChild(question);
            question.innerHTML = quiz[current].q

            quiz[current].a.forEach((answers) => {

                let btn = document.createElement("button");
                btn.innerHTML = answers;
                btn.className = "answers";
                quizDiv.appendChild(btn);
                btn.addEventListener("click", () => {
                    selectedAnswer = btn.innerHTML;

                    if (selectedAnswer == quiz[current].crt) {
                        score += 1;
                    };
                    next();
                })
            });
        }
        else {
            clearInterval(timer);
            // timer.style.display = "none";

            nextb.style.display = "none";
            // timer.style.display="none";
            quizDiv.innerHTML = `Your mark is ${score}/5`;

        }


        if (current == quiz.length - 1) {
            nextb.innerHTML = "SUBMIT";
        } else {
            nextb.innerHTML = "Next";
        }
    };
  
    displayQues(current);

    let next = () => {
        current++;
        // clearInterval();
        displayQues(current);
    }
    nextb.addEventListener("click", next);

};