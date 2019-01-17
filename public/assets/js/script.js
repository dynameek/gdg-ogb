/**
 * @author Oguntuberu Nathan O.
 */

 // FUNCTIONS
 function addPost (data) {
    const   post_container = document.getElementById('posts'),
            post = document.createElement('div'),
            name_span = document.createElement('span'),
            post_body = document.createTextNode(": " + data.body);

    post.setAttribute('class', 'post');
    name_span.setAttribute('class', 'name');

    name_span.innerHTML = data.user;
    post.appendChild(name_span);
    post.appendChild(post_body);
    post_container.appendChild(post);
 }

 // HANDLE USER EVENTS
 window.addEventListener('load', function(){
    
    //  ESTABLISH SOCKET CONNECTION
    var socket = io();

    //  SOCKET LISTENERS
    socket.on('add-post', (data) => {
        addPost(data);
    })

    //  GET FORM ELEMENTS
    const   post_body = document.forms.post_form.post_body,
            post_user = document.forms.post_form.post_screen_name,
            post_btn = document.forms.post_form.post_submit;

    post_btn.addEventListener('click', () => {
        //  Read Input
        let user = (post_user.value.length > 0) ? post_user.value : 'Random User';
        let body = (post_body.value.length > 0) ? post_body.value : 'Random Post';

        //  Emit event
        socket.emit('new-post', {user: user, body: body});
    })
 });