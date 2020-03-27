var findSubstring = function(s, words) {
    let len = words[0].length
    let r = []
    let searchArrange = (cur,array) => {
        if(cur.length === len){
            r.push(cur)
        }else {
            array.forEach((item,index)=>{
                let _array = [].concat(array)
                _array.splice(index,1)
                searchArrange(cur.concat([item]),_array)
            })
        }
    }
    searchArrange([],words)
    let posArray = []
    let pos
    r.map((item,index)=>{
        pos = s.indexOf(item.join(''))
        while (pos > -1){
            posArray.push(pos)
            pos = s.indexOf(item.join(''),pos+1)
        }
    })
    console.log(posArray)
    // return posArray
    return Array.from(new Set(posArray))
};


// let s = "wordgoodgoodgoodbestword",
//     words = ["word","good","best","good"]

let s ="foobarfoobar", words = ["foo","bar"]


    // ["foo","bar"]


console.log(findSubstring(s,words))
