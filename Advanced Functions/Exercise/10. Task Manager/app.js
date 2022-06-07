function solve() {
    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    }
    const [_, openSection, progressSection, finisgSection] = Array.from(document.querySelectorAll('section'));
    document.getElementById('add').addEventListener('click',  addTask);
    function addTask(event) {
        event.preventDefault();
        // create element
        const article = document.createElement('article');
        article.appendChild(createElement('h3', input.name.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.name.value}`));
        const div = createElement('div', '', 'flex');
        div.appendChild(createElement('button', 'Start', 'green'));
        div.appendChild(createElement('button', 'Delete', 'red'));
        article.appendChild(div);

        // append to open section
        openSection.appendChild(article);

        Object.values(input).forEach(i => i.value = '');
        //
    }

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}