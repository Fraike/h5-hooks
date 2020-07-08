// /**
//  * @param {string[]} ops
//  * @return {number}
//  */
// let calPoints = function(ops) {
//     let res = []
//     let pre1
//     let pre2
//     ops.map(item=>{
//         switch (item){
//             case "C":
//                 if(res.length){
//                     res.pop()
//                 }
//                 break
//             case "D":
//                 pre1 = res.pop()
//                 res.push(pre1,pre1 * 2)
//                 break
//             case "+":
//                 pre1 = res.pop()
//                 pre2 = res.pop()
//                 res.push(pre2,pre1,pre2 + pre1)
//                 break
//             default:
//                 res.push(parseInt(item))
//         }
//     })
//     console.log(res)
//     return  res.reduce((total,num)=>{return total + num})
// };
//
// let res =  calPoints(["5","2","C","D","+"])
// console.log(res)

const a = {
  name: 'wwt'
}

const handlers = {
  set(){
    console.log('set')
  },
  get(){
    console.log('get')
  }
}

const observable = new Proxy(a, handlers)


console.log(a.name)



