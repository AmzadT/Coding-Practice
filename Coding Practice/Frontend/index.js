let authContainer = document.querySelector('#container')
let login = document.querySelector('#login')
let signup = document.querySelector('#signup')

let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

if(loggedUser){
    login.innerHTML = `Hii ${loggedUser.userName}`
}

login.addEventListener('click', ()=>{
    window.location.href = 'login.html'
})

signup.addEventListener('click', ()=>{
    window.location.href = 'signup.html'
})


// signup
var form = document.querySelector('form')
var data = [];

// const saveData = (key, arr)=>{
//     localStorage.setItem(key, JSON.stringify(arr))
//     console.log('Data saved')
// }

const saveData = ()=>{
    localStorage.setItem('data', JSON.stringify(data))
    console.log('Data saved')
}

const loadData = ()=>{
    var storedValue = JSON.parse(localStorage.getItem('data'))
    if (storedValue) {
        data = storedValue
    }
}

const handleFormSubmit = (event)=>{
    event.preventDefault();
    var targetElemnt = event.target
    var userName = targetElemnt[0].value
    var email = targetElemnt[1].value
    var password = targetElemnt[2].value
    var confirm = targetElemnt[3].value

    if(password === confirm){
        var newArr = data.filter((ele, index)=>{
            return (ele.email === email) && (ele.name === userName) && (ele.password === password)
        })
        
        if(newArr.length > 0){
            alert('User already exists')
        }else{
            var userObj = {
                name : userName,
                email : email,
                password : password
            }
    
            data.push(userObj)
            // saveData('data', data)
            saveData()
            alert('User Sign-UP Successfully')
            window.location.href = 'login.html'
        }
        
    }else{
        alert('Passwords not matching')
    }
}

form.addEventListener('submit', handleFormSubmit)

loadData()




// login 
var form = document.querySelector('form')
var data;

const loadData = ()=>{
    var storedValue = JSON.parse(localStorage.getItem('data'))
    if (storedValue) {
        data = storedValue
    }
}

const handleFormSubmit = (event)=>{
    event.preventDefault()
    var targetElemnt = event.target
    var email = targetElemnt[0].value
    var password = targetElemnt[1].value

    var newArr = data.filter((ele, index)=>{
        return (ele.email === email) && (ele.password === password)
    })
    
    if(newArr.length > 0){
        localStorage.setItem('loggedUser', JSON.stringify({status: true, userName: newArr[0].name}))
        alert('Login SuccessFully')
        window.location = 'home.html'
    }else{
        alert('Invalid Credentials Email or Password')
    }
}

form.addEventListener('submit', handleFormSubmit)

loadData()