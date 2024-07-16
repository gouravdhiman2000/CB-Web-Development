//1. require path module to join two or more different path of files
const fs = require('fs/promises');
const path = require('path');

// 4. make new file to collect the output of mergedData file
const outputPath = path.join(__dirname, 'output.json');

// 2. create function for merging the files
async function mergeFiles(file1,file2){
    // 2.1. read the file1 and file2 using fs module
    try{
        let data1 = await fs.readFile(file1);
        let data2 = await fs.readFile(file2);

        // 2.2 parse the data
        data1= JSON.parse(data1);
        data2= JSON.parse(data2);

        // console.log(data1);
        // console.log(data2);

        // 2.3 - merging the data of both the files
        let mergedData = [...data1,...data2];
        console.log(mergedData);

        // 2.4 - sorting the data of mergedData file
        // sort in ascending order
        mergedData.sort((a,b)=> a-b);
        console.log(mergedData);

        // 4.1- write the output to the new  file
        await fs.writeFile(outputPath, JSON.stringify(mergedData));
    }
    catch(err){
        console.log("Error aa gaya", err);
    }
}


// 3. join the path of both the files
let file1 = path.join(__dirname + '/database/data.json');
let file2 = path.join(__dirname + '/database/data1.json');

// 5. call the mergeFile function
mergeFiles(file1,file2);



