// FUNCTIONS ASSIGNMENT 

const jamb = (scr) => {
     const grade = 'Excellent'
     const grade1 = 'Very good'
     const grade2 = 'Good'
     const grade3 = 'Average'
     const grade4 = 'Fail'

     if(scr >= 90){
          return grade
     }else if(scr >=75 && scr <= 89 ){
          return grade1
     }else if(scr >=65 && scr <= 74 ){
          return grade2
     }else if(scr >=50 && scr <= 64 ){
          return grade3
     }else{
           return grade4
     }
}
console.log(jamb(100))



// AGE ASSIGNMENT

const age = (ag) => {
     const rr = 'Access granted'

     if(ag < 18){
          return 'Access Denied'
     }
     return rr
}
console.log(age(8))
