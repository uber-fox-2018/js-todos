function something(input) {
    let arr = [
        {
            id: 1,
            tags: ['favorite', 'mantab']
        },
        {
            id: 2,
            tags: ['sip']
        }
    ]
    
    
    let hasil = arr.filter(fil => {
        let kata = fil.tags.join('');
        let rgx = new RegExp('mantab', 'g')
       console.log(kata.match(rgx))
        // return fil.tags.join('').
    })
    
    console.log(hasil);
}

something('mantab')




