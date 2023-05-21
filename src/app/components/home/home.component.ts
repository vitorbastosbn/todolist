import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Item } from 'src/app/models/item.model';
import { Lista } from 'src/app/models/lista.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DialogService, MessageService],
})
export class HomeComponent implements OnInit {
  listas: Lista[] = [];
  ref!: DynamicDialogRef;
  isVisibleAdicionarLista: boolean = false;
  isVisibleAdicionarItem: boolean = false;
  nomeLista!: string;
  nomeItem!: string;

  ngOnInit(): void {
    this.carregarListaSalva();
  }

  constructor(public dialogService: DialogService, 
              public messageService: MessageService) {}

  adicionarLista() {
    if(this.nomeLista === '' || this.nomeLista === undefined) return;

    this.carregarListaSalva();

    this.listas.push({
      id: this.listas.length,
      descricao: this.nomeLista,
      itens: [],
    } as Lista);

    this.salvarListaNoArmazenamento();

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Lista salva com sucesso!' });

    this.nomeLista = '';
  }

  adicionarItem(indice: number, nome: string | undefined) {
    if(this.nomeItem === '' || this.nomeItem === undefined) return;

    this.carregarListaSalva();

    this.listas[indice].itens.push({
      id: this.listas[indice].itens.length,
      descricao: nome,
    } as Item);

    this.salvarListaNoArmazenamento();

    this.nomeItem = '';

    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item salvo com sucesso!' });
  }

  excluirLista(indice: number) {
    this.carregarListaSalva();
    this.listas.splice(indice, 1);
    this.salvarListaNoArmazenamento();
  }

  excluirItem(indiceLista: number, item: Item) {
    this.carregarListaSalva();
    this.listas[indiceLista].itens.splice(this.listas[indiceLista].itens.indexOf(item),1);
    this.salvarListaNoArmazenamento();
  }

  fecharDialogAdicionarItem(indiceLista: number) {
    if (this.nomeItem) this.adicionarItem(indiceLista, this.nomeItem);

    this.nomeItem = '';
    this.isVisibleAdicionarItem = false;
  }

  carregarListaSalva() {
    if (JSON.parse(localStorage.getItem('listas') || '') !== '') {
      this.listas = JSON.parse(localStorage.getItem('listas') || '');
    }
  }

  salvarListaNoArmazenamento() {
    localStorage.setItem('listas', JSON.stringify(this.listas));
  }

}
