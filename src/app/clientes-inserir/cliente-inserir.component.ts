import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cliente-inserir',
    templateUrl: './cliente-inserir.component.html',
    styleUrls: ['./cliente-inserir.component.css']
})

export class ClienteInserirComponent implements OnInit {
    constructor() { }

    nome: string
    endereco: string
    fone: string
    


    ngOnInit() { }
}