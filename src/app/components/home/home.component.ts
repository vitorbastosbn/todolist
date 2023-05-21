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

  ngOnInit(): void {}

  constructor(public dialogService: DialogService, 
              public messageService: MessageService) {}

  adicionarLista() {
    this.listas.push({
      id: this.listas.length,
      descricao: this.nomeLista,
      itens: [],
    } as Lista);

    this.nomeLista = '';
  }

  adicionarItem(indice: number, nome: string | undefined) {
    this.listas[indice].itens.push({
      id: this.listas[indice].itens.length,
      descricao: nome,
    } as Item);
  }

  excluirLista(indice: number) {
    this.listas.splice(indice, 1);
  }

  excluirItem(indiceLista: number, item: Item) {
    this.listas[indiceLista].itens.splice(
      this.listas[indiceLista].itens.indexOf(item),
      1
    );
  }

  // fecharDialogAdicionarLista() {
  //   if (this.nomeLista) this.adicionarLista(this.nomeLista);

  //   this.nomeLista = '';
  //   this.isVisibleAdicionarLista = false;
  // }

  fecharDialogAdicionarItem(indiceLista: number) {
    if (this.nomeItem) this.adicionarItem(indiceLista, this.nomeItem);

    this.nomeItem = '';
    this.isVisibleAdicionarItem = false;
  }

}
