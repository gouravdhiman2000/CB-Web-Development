// console.log("Hello");

let body = $('body');
console.log(body);

let h1 = $('<h1>');
body
.append(
    h1.text('Hello World').css('font-size','50px').addClass('heading')
    )
    .append(
        $('<button>')
        .text('Click Me😊')
        .addClass('button')
        // adding event listener to button
        .click(ev=>{
            $(ev.target).css('background-color','skyblue')
        })
        .dblclick(ev=>{
            console.log("Kyu double click dabaya!")
        })
        
    )
    .append(
        $('<ul>')
            .html(
                '<li>Avengers</li> <li>Thor</li> <li>IronMan</li> '
            ).addClass('movies')

    )  



