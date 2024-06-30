import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../../services/album-service.service';
import { ListaDettaglio } from '../../models/dettaglio';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit{
  dettaglio:ListaDettaglio[]=[];

  constructor(private ps: AlbumServiceService) {

  }

  ngOnInit(): void {
    this.ps.getDettaglioAlbum().subscribe(dati => {
      this.dettaglio = dati;
    });

  }

}
