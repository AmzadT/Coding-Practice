// What is an object?
// It is a data structure in which store the data as key:value pairs, and all the keys are unique.
// add, update, delete
// array, object, function, string, boolean, number


// this --> when a function is invoked as a method of an object, at that point this refer to the main/parent/ object.


var details = {
    name : 'Amzad',
    age : 24,
    city : 'Siwan',

    Print : function(){
        console.log('Hello', this.name)
    }
}

details.Print()
// changing the name here
details.name = 'Tanu'
details.Print()


// create an object with key length and width and also write object method area and parameter of a rectangle.

var rectangle = {
    length : 5,
    width : 10,

    Area : function(){
        var area =  this.length * this.width
        console.log(area)
    },

    Parameter : function(){
        var parameter =  2 * (this.length + this.width)
        console.log(parameter)
    }
}

rectangle.Area()
rectangle.Parameter()



// access the object array elements
var obj = {
    array : ['Amzad', 'Faiz', 'Vicky', 'Imran'],

    Print : function(){
        for(var i=0; i<this.array.length; i++){
            console.log(this.array[i])
        }
    }
}
obj.Print()