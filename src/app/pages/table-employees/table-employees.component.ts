import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {

  public listaFuncionarios: Funcionario[] = [];

  private service: FuncionarioService;
  private router: Router;

  constructor(service: FuncionarioService, router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((funcionarios) => {
      this.listaFuncionarios = []; // Resetar dados
      for (let f of funcionarios) {
        let dados = f.payload.doc.data();
        this.listaFuncionarios.push({
          id: f.payload.doc.id,
          nome: dados['nome'],
          email: dados['email'],
          cargo: dados['cargo'],
          salario: dados['salario'],
          foto: dados['foto']
        });
      }
    });
  }

  public excluirFuncionario(id: string | undefined): void {
    if(id != undefined && window.confirm("Deseja, realmente, excluir o registro?")){
      this.service.remove(id);
    }
  }

  public editarFuncionario(id: string | undefined): void {
    if(id != undefined) {
      this.router.navigate(['/edit', id]); //  localhost:4200/edit/20
    }
  }
}
