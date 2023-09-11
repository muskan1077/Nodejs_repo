// const square = function(x){
//     return x*x
// }
// const square = (x) =>{
//     return x*x
// }
// const square = (x) => x*x
// console.log(square(3))
// const Event = {
//     name: 'Birthday Party',
//     printGuestList: function(){
//         console.log('Guest list For' + this.name)
//         //this.printGuestList.forEach(function(guest){
//         this.guestList.forEach((guest) => {
//             console.log(guest + 'is attending' + this.name)
//         })
//     }
// }
// Event.printGuestList()

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
