import { Component } from "@angular/core";

@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent {
  user = {
    username: "",
    cpf: "",
    birthday: 1,
    password: "",
  };

  register() {
    window.alert(`Usuário: ${this.user.username}
    CPF: ${this.user.cpf}
    Dia de Nascimento: ${this.user.birthday}
    Senha: ${this.user.password}`);
  }
}
