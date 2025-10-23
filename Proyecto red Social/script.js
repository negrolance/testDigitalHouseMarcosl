const urlBase="https://jsonplaceholder.typicode.com/posts"

let posts= []

function getData() {
    fetch(urlBase)
    .then(res=>res.json())
    .then(data=>{
        posts=data
        renderPostList()
    })
    .catch(error=>console.error('error al llamar a la apui:',error))
}


function renderPostList(){
    const postList= document.getElementById('postList');
    postList.innerHTML="";

    posts.forEach(post =>{
        const listItem = document.createElement('li')
        listItem.classList.add('postItem')
        listItem.innerHTML = `
        

        <strong> ${post.title}</strong>
        <p>${post.body}</p>
        <button onclick="editPost(${post.id})"> Editar </button>
        <button onclick="deletePost(${post.id})"> Borrar </button>
        
        <div id="editForm-${post.id}" class="editForm" style="display:none">
            <label for="editTitle"> Título:</label>
            <input type="text" id="editTitle-${post.id}" value="${post.title}" required></input>
            <label for="editBody"> Mensaje:</label>
            <textarea id="editBody-${post.id}"  value="${post.body}" required></input>required></textarea>
            <button onclick="updatePost(${post.id})">actualizar</button>
        </div>
        `
        postList.appendChild(listItem)

    })

}

function postData() {
    const postTitleInput = document.getElementById('postTitle');
    const postBodyInput = document.getElementById('postBody');
    const postTitle = postTitleInput.value;
    const postBody = postBodyInput.value;

       if (postTitle.trim() == '' || postBody.trim() == '') {
        alert('Los campos son obligatorios')
        return
    }

    fetch(urlBase, {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
        .then(data => {
            posts.unshift(data)
            renderPostList();
            posts.title='';
            posts.body=''
        
    })
    .catch(error=> console.error('error al querer crear posteo',error))

}




function editPost(id) {
    const editForm = document.getElementById(`editForm-${id}`);
    editForm.style.display = (editForm.style.display == 'none') ? 'block' : 'none'
}

function updatePost(id){
    const editTitle= document.getElementById(`editTitle-${id}`).value;
    const editBody= document.getElementById(`editBody-${id}`).value;

    fetch(`${urlBase}/${id}`,{
      
    method: 'PUT',
    body: JSON.stringify({
    id: id,
    title: editTitle,
    body: editBody,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{
    const index = posts.findIndex(post => post.id === data.id)
    if(index != -1){
        post[index] = data
    }else{
        alert('no encontramos nada')
    }
  });
  renderPostList()
   .catch(error=> console.error('error al querer crear posteo',error))
}

function deletePost(id){

    fetch(`${urlBase}/${id}`, {
  method: 'DELETE',
})    
    .then(res => {
        if(res.ok){
            posts= posts.filter(post=>post.id!=id)
            renderPostList();
        }else{
            alert ('no es ok el id')
    }
})

    .catch(error=> console.error('hubo un error:', error))



}
