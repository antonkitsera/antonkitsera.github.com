function openClose() {
    var someElem = document.getElementById('message');
    if (someElem.style.display === "none") {
      someElem.style.display = 'flex';
    } else {
      someElem.style.display = 'none';
    }
}

