let output = document.getElementById("output");
let text_in = document.getElementById("name");

async function new_directory(){
    //Write here
    const name = text_in.value();
    const response = await fetch('/mkdir' + name);
    output.textContent = await response.text();
}

async function new_file(){
    //Write here
}

async function show_files() {
    //Write here
}