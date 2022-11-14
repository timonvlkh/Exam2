class Message{
    constructor(author, time, message){
        this.author = author
        this.time = time
        this.message = message
    }
    toTring(){
        return `${this.time} ${this.author}: ${this.message}`
    }
}

class Messanger extends Message{
    arr = []
    send(author, message){
        let newMessage = new Message(author, gettime(), message)
        this.arr.push(newMessage)
    }
    showHistory(){
        this.arr.forEach((item) => {
            console.log(item.toTring())
        })
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

let newMessanger = new Messanger()
newMessanger.send('Эмиль', 'Привет')
newMessanger.send('Шамси', 'Пока')
newMessanger.showHistory()