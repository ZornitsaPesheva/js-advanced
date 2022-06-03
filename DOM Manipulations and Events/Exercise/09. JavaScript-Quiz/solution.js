function solve() {
    let [section1, section2, section3] = document.querySelectorAll('section');
    let answers = document.querySelectorAll('.answer-text');
    let [answer1, answer2, answer3, awswer4, answer5, answer6 ] = answers;
    function showNext(e) {
      let section = e.target.parentElement.parentElement.parentElement.parentElement;
      let nextSection = section.nextElementSibling;
      section.classList.add('hidden');
      if (e.target != answer5 && e.target != answer6) {
        nextSection.classList.remove('hidden');
      }
      else {
        let results = document.querySelector('#results h1');
        results.textContent = "You are recognized as top JavaScript fan!";
        console.log(results.style);
        document.querySelector('#results').classList.add('current');
      }
    }
    for (let answer of answers) {
      answer.addEventListener('click', showNext);
    }
}
