const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "Arpitha Nagappa";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = [];
let questions = ["Who was the first American woman in space? ",
                "True or false: 5000 meters = 5 kilometers. ",
                "(5 + 3)/2 * 10 = ? ",
                "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride",
                     "True",
                     "40",
                     "Trajectory",
                     "3"];
let candidateAnswers = [];
let num_of_correctAnswers = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter candidate's name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 for(i=0;i<questions.length;i++)
 {
 candidateAnswer = input.question(` ${questions[i]}`);
 candidateAnswers.push(candidateAnswer);
 }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade;
  for(i=0;i<candidateAnswers.length;i++)
  {
    if(candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase())
    {
      num_of_correctAnswers += 1;
    }

    console.log(`\n${i+1}) ${questions[i]}`);
    console.log("Your Answer: "+candidateAnswers[i]);
    console.log("Correct Answer: "+correctAnswers[i]);
  }
  grade = (num_of_correctAnswers/(questions.length))*100;
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name: "+candidateName);
  askQuestion();
  let grade1 = gradeQuiz(this.candidateAnswers);
  console.log(`\n>>> Overall Grade: ${grade1}% (${num_of_correctAnswers} of ${questions.length} responses correct) <<<`);
  if(grade1>=80) console.log(">>> Status: PASSED <<<");
  else console.log(">>> Status: FAILED <<<"); 
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};