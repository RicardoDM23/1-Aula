function* fibonacci() {
    let n1 = 1
    let n2 = 1

    while(true) {
        let current = n2
        n2 = n1
        n1 += current

        yield current
    }
}

let fibo = fibonacci()
for(let i =0;i<=15;i++){
    console.log(fibo.next())
}
