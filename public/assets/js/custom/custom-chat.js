/*
-----------------------------
    : Custom - Chat js :
-----------------------------
*/
"use strict";
$(document).ready(function() {
    $('.chat-user-list ul').slimscroll({
        height: '565',
        position: 'right',
        size: "7px",
        color: '#CFD8DC'
    });
    $('.chat-body').slimscroll({
        height: '510',
        position: 'right',
        size: "7px",
        color: '#CFD8DC',
        start: 'bottom'

    });
    $(function() {
        let ip_address = '127.0.0.1';
        let socket_port = '3000';
        let socket = io(ip_address + ':' + socket_port);
        socket.on('connection');
        let chatInput = $('.chat-input');
        chatInput.keypress(function(e) {
            let message = $(this).html();
            if (e.which === 13 && !e.shiftkey) {
                socket.emit('sendChatToServer', message);
                $('.chat-body').append(`<div class="chat-message message chat-message-right">
                <div class="chat-message-text">
                <span>${message}</span>
                </div>
                <div class="chat-message-meta">
                <span>4:30 pm<i class="feather icon-clock ml-2"></i></span>
                </div>
                </div>`);
                chatInput.html('');
                $('.chat-body').slimscroll({
                    scrollBy: '400px'

                })
                return false;
            };
        });

        socket.on('sendChatToClient', (message) => {
            $('.chat-body').append(`<div class="chat-message message chat-message-left">
                    <div class="chat-message-text">
                        <span>${message}</span>
                    </div>
                    <div class="chat-message-meta">
                        <span>4:30 pm<i class="feather icon-clock ml-2"></i></span>
                    </div>
                </div>`);

            //////////////////////////////////
            $('.chat-body').slimscroll({
                scrollBy: '400px'

            })

        });

    });
});
