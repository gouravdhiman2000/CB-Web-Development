// Selecting body
$('body')
    .append(
        $('<h1>')
            .text('Todo List')
            .addClass('heading')

    )
    .append(
       $('<div>')
        .addClass('inputDetails')
        .append(
            $('<input>')
            .attr('placeholder', 'Enter New Task')
            .attr('type', 'text')
            .addClass('newTask')
        )
        .append(
            $('<button>')
                .text('Add Task')
                .addClass('btn')
                .click(ev => {
                    // to prevent empty task also adding when click on the button
                    // trim will remove the extra spaces from the front or back in the input field
                    if($('.newTask').val().trim() != ''){
                        $('.taskList')
                        .append(
                            $('<li>')
                            // console.log($('newTask').val())
                                .addClass('task')
                                .text(
                                    $('.newTask').val()
                                )
                                 // adding button to task
                                .append(
                                    $('<div>')
                                        .addClass('btngroup')
                                        .append(
                                            $('<button>').text('⬆️').addClass('upBtn')
                                        )
                                        .append(
                                            $('<button>').text('⬇️').addClass('downBtn')
                                        )
                                        .append(
                                            $('<button>').text('❌').addClass('deleteBtn')
                                        )
                                    )
                                )
                                // making new task empty when entering the data of one task and append to the div
                                $('.newTask').val('')
                    }

                    
                   
                                
                       
                })
        )

    )
    
    .append(
        $('<ul>')
        .addClass('taskList')
            // adding event delegation adding event to  parent - which is taskList
            .click(ev => {
                // console.log($(ev.target))
                if($(ev.target).hasClass('upBtn')){
                    // console.log('Up Press Hua')
                    // console.log($(ev.target).parent().parent())
                    // console.log($(ev.target).parent().parent().prev())
                    $(ev.target).parent().parent()
                        .insertBefore($(ev.target).parent().parent().prev())
                }
                else if($(ev.target).hasClass('downBtn')){
                    // console.log('Down Press Hua')
                    $(ev.target).parent().parent()
                    .insertAfter($(ev.target).parent().parent().next())
                }
                else if($(ev.target).hasClass('deleteBtn')){
                    // console.log('Delete Press Hua')
                    $(ev.target).parent().parent().remove()
                }
                
            })
            
    )
