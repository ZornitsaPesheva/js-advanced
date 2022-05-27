function editElement(element, match, replacer) {
    const text = element.textContent;
    const result = text.split(match).join(replacer);
    element.textContent = result;
}