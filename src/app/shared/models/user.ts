export class User {
    username: string
    token: string

    constructor(username: string, token: string) {
        this.username = username
        this.token = token
    }
}

export class DbUser {
    public firstName: string
    public lastName: string
    public userName: string
    public password: string
    public token: string

    constructor(
        firstName: string,
        lastName: string,
        userName: string,
        password: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.password = password
        this.token = ""
    }
}