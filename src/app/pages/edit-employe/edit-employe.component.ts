import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {

  private id: string | undefined;
  private service: FuncionarioService;
  private router: Router;
  public funcionario: Funcionario | null = null;


  constructor(route: ActivatedRoute, router: Router, service: FuncionarioService) {
    route.params.subscribe(params => {
      this.id = params["id"];
    });
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
    if(this.id != undefined) {
      this.service.findById(this.id).subscribe(funcionario => {
        let dados = funcionario._delegate._document.data.value.mapValue.fields;
        this.funcionario = {
          nome: dados.nome.stringValue,
          email: dados.email.stringValue,
          cargo: dados.cargo.stringValue,
          salario: dados.salario.integerValue,
          foto: dados.foto.stringValue
        }
      });
    }
  }

  public editarFuncionario(): void {
    if(this.id != undefined && this.funcionario != null) {
      this.service.update(this.id, this.funcionario).then(res => {
        console.log(res);
        this.router.navigate(["/home"]);
      });
    }
  }
}
