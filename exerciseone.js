// 1) Get all posts
$('#btnOne').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
	    console.log(posts);
    });
});

// 2) Get post with id of 14
$('#btnTwo').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/id/14', function(post){
        console.log(post);
    });
});

// 3) Get the comments from post with id of 12
$('#btnThree').click(function(){
    $.get('http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/comments/id/12', function(post){
        console.log(post);
    });
});

// 4) Get all the posts from user with id of 2
$('#btnFour').click(function(){
    $.get('http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/user/2', function(data){
        console.log(data);
    });
});

// 5) Create a new post and log the id generated for it by the server
$.post('http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{
	userId: 1,
	title: "Another Post",
	body: "Lorem ipsum"
}); 

// 6) Replace the post with id of 12
$.ajax({
	method: 'PUT',
	url: 'http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
	data: {
		userId: 1,
		title: "Another Post",
		body: "Lorem ipsum"
	},
});

// 7) Update the title field of the post with id of 12
$.ajax({
	method: 'PATCH',
	url: 'http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/id/12',
	data: {
    title: "New Title"
    },
});
	

// 8) Delete the post with id of 12
$.ajax({
	method: 'DELETE',
	url: 'http://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/id/12',
});



