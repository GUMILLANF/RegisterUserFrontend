export class AppConstants {

    public static get baseServidor(): string { return "http://localhost:8080/api" } 

    public static get baseLogin(): string { return this.baseServidor + "/login" }

    public static get baseUser(): string { return this.baseServidor + "/user" }

    public static get baseNewUser(): string { return this.baseServidor + "/newuser" }

}
