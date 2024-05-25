export class Student{
    #studName
    #studLastName
    #studEmail
    #studBirthDay
    #studTutor
    #studTutorContact

    constructor(){}

    setStudname(name){
        this.#studName=name
    }
    setStudlastname(lastname){
        this.#studLastName=lastname
    }
    setStudemail(mail){
        this.#studEmail=mail
    }
    setStudbirthday(date){
        this.#studBirthDay=date
    }
    setStudTutor(Tutname){
        this.#studTutor=Tutname
    }
    setStudTutorcontact(number){
        this.#studTutorContact=number
    }

    /////      getters

    funciona(){
        console.log("funca    :D")
    }
    getStudname(){
        return this.#studName
    }
    getStudLastname(){
        return this.#studLastName
    }
    getStudmail(){
        return this.#studEmail
    }
    getStudbirthday(){
        return this.#studBirthDay
    }
    getStudTutor(){
        return this.#studTutor
    }
    getStudTutorcontact(){
        return this.#studTutorContact
    }

}