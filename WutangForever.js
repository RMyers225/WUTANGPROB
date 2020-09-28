class WuTangForeverBuzz {
    constructor(){
        return this
    }
    wuTangClan(value){
        let output ="";
        for (let i = 1; i <= 100; i++) {
            if((i % 3 != 0) && (i % 5 != 0)) {
               output+= "WutangForever\n"
            }
            
           else if(i % 3 == 0) {
                output+=("Wu\n")
            }
            else if(i % 5 == 0) {
                output+=("Tang\n")
            }
            else output+=(i)
        }

        return output;
    }
}
const ODB = new WuTangForeverBuzz()

console.log(ODB.wuTangClan())

// module.exports = WuTangForeverBuzz;