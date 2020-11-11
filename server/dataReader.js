const csv=require('csvtojson')


// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log(jsonObj);
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */ 
// })

const start = async function() {
    // const result = await myfunction('test', 'test');
    const jsonArray = await csv().fromFile('history.csv');
    return jsonArray
    // console.log(jsonArray);
  }

  var a = start()
 a.then((a) => {
     console.log(a[2])
 });
// console.log(a[2]);