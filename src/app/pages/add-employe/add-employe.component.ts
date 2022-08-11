import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  public formulario: FormGroup;
  private service: FuncionarioService;
  private router: Router;

  constructor(formBuilder: FormBuilder, service: FuncionarioService, router: Router) {
    this.formulario = formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      salario: ['', [Validators.required]],
      foto: ['', [Validators.required]]
    });
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if(this.formulario.valid) {
      let funcionario: Funcionario = this.formulario.value;
      this.service.insert(funcionario).then((res) => {
        console.log(res);
        this.router.navigate(["/home"]);
      })
    }
    else {
      window.alert("Preencha todos os campos!");
    }
  }
}
