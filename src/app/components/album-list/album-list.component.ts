import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../../services/album-service.service';
import { Album } from '../../models/Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent implements OnInit {
album:Album[]=[];

  constructor(private ps: AlbumServiceService) {

  }

  ngOnInit(): void {
    this.ps.getAlbums().subscribe(dati => {
      this.album = dati;
    });

  }}
