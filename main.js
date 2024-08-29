const counter = document.querySelector("#totalNumber");
let countNumber = 0;
document.addEventListener('click', function(event) {

    countNumber++;
    counter.innerHTML = "$ " + countNumber;

    const numberElement = document.createElement('div');
    numberElement.textContent = '+1';
    numberElement.className = 'number';

    numberElement.style.left = `${event.pageX}px`;
    numberElement.style.top = `${event.pageY}px`;

    document.body.appendChild(numberElement);

    setTimeout(() => {
        numberElement.remove();
    }, 1000);

    if(counter.innerText === "$ 15") {
        window.location.href = "https://www.youtube.com/watch?v=xYd_qCcTuWg";
    }

});
document.addEventListener('dblclick', function(event) {
    event.preventDefault();
});
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

