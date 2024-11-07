// Error Handle 1
// try {
//     alert('hi abir')
//     alert(x)
//     alert('hi moon')
// } catch (error) {
//     console.log('inside log');
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// }
// finally{
//     alert('hi moon')
// }

// =============  Error Handle 2  ===============

document.querySelector('.btn').addEventListener('click',function(){
    let num = document.querySelector('input').value
    // console.log(input);
    try {
        if (num<5) 
            {
                throw 'The Number Is Too Low'
            } else if(num>10){
                 throw 'The Number Is Too High'
            }
        
    } catch (err) {
        console.log(err);
    }

})