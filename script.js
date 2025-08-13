// Correct answers and explanations for each question
const answers = {
    q1: { correct: "B", explanation: "After the first sperm enters, cortical granules change the zona pellucida so no other sperm can enter." },
    q2: { correct: "B", explanation: "Primary oocyte completes meiosis I before ovulation → becomes secondary oocyte arrested at metaphase II until fertilization." },
    q3: { correct: "A", explanation: "Ectoderm → neural tube → CNS & PNS." },
    q4: { correct: "C", explanation: "Blastocyst attaches around day 6–7; complete implantation by day 9–10." },
    q5: { correct: "C", explanation: " Primitive streak marks the start of gastrulation in the 3rd week." },
    q6: { correct: "D", explanation: "Retina comes from neural tube (ectoderm), not neural crest." },
    q7: { correct: "B", explanation: "Anterior neuropore fails to close → major brain malformations." },
    q8: { correct: "B", explanation: "Binding to ZP3 receptors triggers acrosome enzymes to digest the zona." },
    q9: { correct: "A", explanation: "Primitive node → notochord → induces neural tube formation." },
    q10: { correct: "C", explanation: "In humans, the allantois forms the urachus, which develops into the upper part of the urinary bladder.." }
};

function submitQuiz() {
    let score = 0;

    // Loop through each question
    for (let key in answers) {
        const question = document.querySelector(`input[name="${key}"]:checked`);
        const labels = document.querySelectorAll(`input[name="${key}"]`);
        
        // Remove old highlights
        labels.forEach(input => {
            input.parentElement.classList.remove('correct', 'incorrect');
            input.parentElement.style.fontSize = "1rem";
        });

        if (question) {
            if (question.value === answers[key].correct) {
                // Correct answer
                question.parentElement.classList.add('correct');
                question.parentElement.style.fontSize = "1.2rem";
                score++;
            } else {
                // Wrong answer
                question.parentElement.classList.add('incorrect');
                question.parentElement.style.fontSize = "1.2rem";

                // Highlight correct answer
                const correctInput = document.querySelector(`input[name="${key}"][value="${answers[key].correct}"]`);
                correctInput.parentElement.classList.add('correct');
                correctInput.parentElement.style.fontSize = "1.2rem";

                // Show explanation
                const hintDiv = document.createElement("div");
                hintDiv.style.color = "black";
                hintDiv.style.fontSize = "1rem";
                hintDiv.style.background = "rgba(255,255,255,0.8)";
                hintDiv.style.padding = "5px";
                hintDiv.style.marginTop = "5px";
                hintDiv.innerHTML = `<strong>Explanation:</strong> ${answers[key].explanation}`;
                correctInput.parentElement.parentElement.appendChild(hintDiv);
            }
        }
    }

    // Show final score
    document.getElementById("result").textContent = `You scored ${score} / ${Object.keys(answers).length}`;
}

// Hint function
function showHint(num) {
    document.getElementById(`hint${num}`).style.display = "block";
}
