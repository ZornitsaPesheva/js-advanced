function solve() {
    let [section1, section2, section3] = document.querySelectorAll('section');
    let answers = document.querySelectorAll('.answer-text');
    let [answer1, answer2, answer3] = answers;
    function showNext(e) {
      if (e.targed != answer3) {
        let section = e.target.parentElement.parentElement.parentElement.parentElement;
        section.classList.add('hidden');
        let nextSection = section.nextElementSibling;
        console.log(section);

        nextSection.classList.remove('hidden');

      }
    }
    for (let answer of answers) {
      answer.addEventListener('click', showNext);
    }
}
