const a = (x) => {
    let a = x;
    let arr = [];

    for(let i=1; i<=10; i++ ){
        arr.push(a+ ' x '+ i+ ' = '+ a*i)
        console.log(arr)
    }

    return arr.join(', ');

}

export default a;