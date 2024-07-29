const programs = new Map()
programs.set('add', add)
programs.set('sub', sub)
programs.set('copy', copy)

function load(program) {
    programs.set(program.name, program);
}

function execute(event) {
    event.preventDefault()
    const command = document.querySelector("#command");
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");

    const args = command.value.trim().split(" ").filter((arg) => arg !== "");
    const programname = args[0].toLowerCase();
    const program = programs.get(programname) ?? (() => "Error");
    console.log(program)

    command.value = "";
    output.value = program(input.value, ...args);

}

function add(input, ...args) {
    return String(+args[1] + +args[2]);
}

function sub(input, ...args) {
    return String(+args[1] - +args[2]);
}

function copy(input) {
    return input;
}