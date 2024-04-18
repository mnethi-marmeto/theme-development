function append(){
    fetch("/?section_id=template--15650135736410__multicolumn_nNHBYp")
    .then(response=>response.text())
    .then((responseText) => {
        console.log(responseText)
        const html = new DOMParser().parseFromString(responseText,'text/html');
        const container = document.getElementById("appendContainer");
        const content = html.querySelector("body")
        console.log(content);
        container.innerHTML = content.innerHTML;
    })
}

