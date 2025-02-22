var input = document.querySelector('.container>input');
var priority = document.querySelector('.container>select');
var todoBtn = document.querySelector('.container>button');
var tBody = document.querySelector('.table-cont>tbody');

// Initialize the todos array
var todos = [];

// Handle Add Todo Button Click
const handleClick = () => {
    if (!input.value || !priority.value) {
        return alert("Please fill in all fields");
    }

    var obj = {
        title: input.value,
        priority: priority.value
    };

    // Add new todo to the array
    todos.push(obj);
    saveData();
    showData(todos);

    // Clear input after adding
    input.value = '';
    priority.value = '';
};

// Save data to localStorage
const saveData = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Load data from localStorage
const loadData = () => {
    var storedValue = JSON.parse(localStorage.getItem('todos'));
    if (storedValue) {
        todos = storedValue;
        showData(todos);
    }
};

// Show data in the table
const showData = (arr) => {
    tBody.innerHTML = ''; // Clear previous table content

    arr.forEach((ele, index) => {
        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerHTML = `${index + 1}`;

        var td2 = document.createElement('td');
        td2.innerHTML = ele.title;

        var td3 = document.createElement('td');
        td3.innerHTML = ele.priority;

        // Apply background color based on priority
        td3.style.backgroundColor = 
        ele.priority === 'high' ? 'red' : ele.priority === 'medium' ? 'green' : 'teal';
    

        var td4 = document.createElement('td');
        var deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.addEventListener('click', () => {
            handleDelete(index);
        });

        td4.append(deleteBtn);

        row.append(td1, td2, td3, td4);
        tBody.append(row);
    });
};

// Handle delete action
const handleDelete = (index) => {
    todos.splice(index, 1); // Remove item from array
    saveData(); // Save updated array
    showData(todos); // Update UI
};

// Event listener for adding todos
todoBtn.addEventListener('click', handleClick);

// Load data on page load
loadData();