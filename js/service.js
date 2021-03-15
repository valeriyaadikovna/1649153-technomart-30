
const serviceLinks = document.querySelectorAll(".service-list li a");
const serviceContents =  document.querySelectorAll(".service .service-content");


serviceLinks.forEach(function(elem) {
    elem.addEventListener("click", function(evt) {
        evt.preventDefault();
        let listItem = this.parentNode;
        Array.from(listItem.parentElement.children).forEach(function(el) {
            el.classList.remove("checked");
        });
        listItem.classList.add("checked");
        let listItemNumber = getIndexElement(listItem);
        serviceContents.forEach(function(el) {
            el.style.display = "none";
        });
        serviceContents[listItemNumber].style.display = "block";
    });
});

function getIndexElement(elem)
{
    return Array.from(elem.parentElement.children).indexOf(elem);
}
