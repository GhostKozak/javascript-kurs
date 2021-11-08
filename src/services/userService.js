export default class UserService {

    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }

    add(user) {
        this.users.push(user)
        this.loggerService.log(user.firstName)
            //console.log(`Kullanıcı eklendi : ${user.firstName}`)
    }

    list() {
        return this.users
            //console.log("Kullanıcılar listelendi")
    }

    getById(id) {
        return this.users.find(user => user.id === id)
    }

}