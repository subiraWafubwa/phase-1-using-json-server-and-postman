fetch('https://localhost:3000/books', () => {})
.then(response => {
    if(!response.ok){
        throw new Error ('Network is not ok') 
    }
    return response.json()
})
.then(data => {
    res.json("get Data", 
        data
)
})
.catch(error => console.log('Error from fetching the article: ' + error))