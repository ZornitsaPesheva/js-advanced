function solve() {
    let [section1, section2, section3] = document.querySelectorAll('section');
    let answers = document.querySelectorAll('.answer-text');
    let [answer1, answer2, answer3, answer4, answer5, answer6 ] = answers;
    let correctAnswers = [];
    let countCorrect = 0;
    function showNext(e) {
      let section = e.target.parentElement.parentElement.parentElement.parentElement;
      let nextSection = section.nextElementSibling;
      let results = document.querySelector('#results h1');
      section.style.display = 'none';
      if ([answer1, answer4, answer5].includes(e.target)) {
        countCorrect++;
        correctAnswers.push(e.target);

      }
      if (e.target != answer5 && e.target != answer6) {
        nextSection.style.display = 'block';
      }
     
      else if (correctAnswers.includes(answer1) &&
          correctAnswers.includes(answer4) &&
          correctAnswers.includes(answer5)){
        results.textContent = "You are recognized as top JavaScript fan!";
        document.querySelector('#results').style.display = 'block';
      }
      else {
        results.textContent = `You have ${countCorrect} right answers`;
        document.querySelector('#results').style.display = 'block';
      }

    }
    for (let answer of answers) {
      answer.addEventListener('click', showNext);
    }
}
