// 1) Get all posts
$('#btnOne').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
	    console.log(posts);
    });
});

// 2) Get post with id of 10
$('#btnTwo').click(function(){
    let output= ' ';
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
        posts.forEach((post, index) => {
            if (id= 10)
            output += `<li> ${post}</li>`;
        });
            document.body.innerHTML = output;
    });
});

