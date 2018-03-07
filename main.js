// var list = [['.','.','.','.'],
//             ['.','X','X','X'],
//             ['X','X','X','.'],
//             ['.','.','.','.']]



// var countNeighbors = function(i,j){
//     var count = 0;
//     for(var k = i-1; k < i+2; k++){
//         for(var l = j-1; l < j+2; l++){
//             if(k >= 0 && l >= 0 && k < list.length && l < list.length){
//                 if(list[k][l] === 'X'){
//                     if(k !== i || l !== j){
//                         count++;
//                     }
//                 }
//             }
//         }
//     }
//     return count;
// }

// function isAlive(i,j){
//     if(list[i][j] === 'X'){
//         return true;
//     } else{
//         return false;
//     }
// }


// var applyRules = function(count,isAlive){
//     if(isAlive){
//         if(count < 2){
//             return ".";
//         }
//         else if(count >= 2 && count <= 3){
//             return "X";
//         }else{
//             return '.';
//         }
//     } else{
//         if(count === 3){
//             return "X"; 
//         }else{
//             return ".";
//         }
//     }
// }

// var printPretty = function(matrix) {

//     for (var i = 0; i < matrix.length; i ++) {
//         var string = '';
//         for (var j = 0; j < matrix[0].length; j++) {
//             string += matrix[i][j];
//         }
//         console.log(string);
//     }
// }


// var newGeneration = function(matrix){
//     var newMatrix = matrix.map(function(row) {return row.map( function(column) { return 0})})          
    
//     for(var i = 0; i < newMatrix.length; i++){
//         for(var j = 0; j < newMatrix.length; j++){
//             var count2 = countNeighbors(i,j);
//             var alive = isAlive(i,j);
//             newMatrix[i][j] = applyRules(count2, alive);
//         }
//     }

//     list = newMatrix;
//     console.log(list);


    // console.log(list2);
    // return list2;
    
// }

// newGeneration(list)
// newGeneration(list)


/////###############################

// var list = Array(20).fill(Array(20));
// why??


var list = []
for (var i = 0; i < 20; i++) {
    list.push([])
    for (var j = 0; j < 20; j++) {
        list[i].push(0);
    }
}


var table = document.createElement('table');

for (var i = 0; i < 20; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 20; j ++) {
        var td = document.createElement('td');
        td.setAttribute('indexRow', i);
        td.setAttribute('indexColumn', j);
        // td.setAttribute('name', i + '_' + j)
        // td.textContent = ' ';
        tr.appendChild(td);

        // td.addEventListener('click', function(e) {
        //     // e.preventDefault();
        //     var indexRow = e.target.getAttribute('indexRow');
        //     var indexColumn = e.target.getAttribute('indexColumn');

        //     if (e.target.style.backgroundColor === '') {
        //         e.target.style.backgroundColor = "black";
                
        //         list[indexRow][indexColumn] = 'X'
        //     } else {
        //         e.target.style.backgroundColor = '';

        //         list[indexRow][indexColumn] = undefined;
        //     }
           
        //     //Why do i need to use target?????
            
        // })
    }
    table.appendChild(tr);
}

var body = document.querySelector('body');

body.appendChild(table);


table.addEventListener('click', function(e) {
    // e.preventDefault();
    var indexRow = e.target.getAttribute('indexRow');
    var indexColumn = e.target.getAttribute('indexColumn');

    // console.log(e.target.style.backgroundColor);
    //???????
    if (e.target.style.backgroundColor === 'white' || e.target.style.backgroundColor === '') {
        e.target.style.backgroundColor = "black";
        
       
        list[indexRow][indexColumn] = 'X'
        
    } else {
        e.target.style.backgroundColor = 'white';

        list[indexRow][indexColumn] = 0;
    }})



var buttonStart = document.querySelector('button.start');

buttonStart.addEventListener('click', function() {
    list = nextGeneration(list);
    displayChanges();
    setInterval(function() {
        list = nextGeneration(list);
        displayChanges();
    }, 400);

})



var displayChanges = function() {
    var tds = document.querySelectorAll('td');
    tds.forEach(function(td) {
        td.style.backgroundColor = 'white';
        
        var indexRow = td.getAttribute('indexRow');
        var indexColumn = td.getAttribute('indexColumn');
        
        if (list[indexRow][indexColumn] === "X") {
            td.style.background = 'black';
        }

    })
}


//////####################################
//////####################################
//////####################################
//////####################################
//////####################################
//////####################################

var countNeighbors = function(i,j){
    var count = 0;
    for(var k = i-1; k < i+2; k++){
        for(var l = j-1; l < j+2; l++){
            if(k >= 0 && l >= 0 && k < list.length && l < list.length){
                if(list[k][l] === 'X'){
                    if(k !== i || l !== j){
                        count++;
                    }
                }
            }
        }
    }
    return count;
}

function isAlive(i,j){
    if(list[i][j] === 'X'){
        return true;
    } else{
        return false;
    }
}


var applyRules = function(count,isAlive){
    if(isAlive){
        if(count < 2){
            return 0;
        }
        else if(count >= 2 && count <= 3){
            return "X";
        }else{
            return 0;
        }
    } else{
        if(count === 3){
            return "X"; 
        }else{
            return 0;
        }
    }
}

var nextGeneration = function(matrix){
    var newMatrix = matrix.map(function(row) {return row.map( function(column) { return 0})})          
    
    for(var i = 0; i < newMatrix.length; i++){
        for(var j = 0; j < newMatrix.length; j++){
            var count2 = countNeighbors(i,j);
            var alive = isAlive(i,j);
            newMatrix[i][j] = applyRules(count2, alive);
        }
    }

    return newMatrix;
}
   



