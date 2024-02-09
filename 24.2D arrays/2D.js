// optional 
// if you are interested in making any sort of games in javascript 

// 2D array = multi-dimensional array that stores a matrix
        //       of data in rows and columns 
        // useful for games, spreadsheets , or representing images

//         [x,o,x]
//         [o,x,o]
//         [x,o,x]

const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]];

// if u want to access individual element within this matrix 
// you have to use two indices 

matrix[0][0] = 'x';
for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}