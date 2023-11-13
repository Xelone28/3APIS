const express = require('express');
const app = express();
const port = 3000;

app.get('/:nbr', (req, res) => {
    const nbr = req.params.nbr
    let temp = []
    let fibo = []
    for (let round = 0; round < nbr; round++) {
        if (temp.length != 2) {
            temp.push(1)
            fibo.push(1)
        } else {
            fibo.push(temp[0]+temp[1]);
            temp[0] = temp[1]
            temp[1] = fibo[fibo.length-1]
        }
    }
    res.send(fibo);
});
app.listen(port, () => {
    console.log(`First exercise app listening on port ${port}`)
});

