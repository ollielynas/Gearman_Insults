fs.readFile('res/insults.json', function (error, content) {
    var data = JSON.parse(content);
    console.log(data.collection.length);
});