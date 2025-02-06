import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  speciesData = [
    {
      date: '25/08/2024',
      species: 'Royal Taigers',
      location: 'Central park',
      latitude: 40.78509685,
      longitude: -70.78509685,
      cameraId: '#Dsler HD 893',
      photoUrl: '/path/to/tiger-image.jpg'
    },
    {
      date: '25/08/2024',
      species: 'The dear Stag',
      location: 'Eiffel Tower',
      latitude: 48.63909685,
      longitude: 36.63909685,
      cameraId: '#Dsler HD 893',
      photoUrl: '/path/to/stag-image.jpg'
    },
    {
      date: '25/08/2024',
      species: 'Thirteen Hundred',
      location: 'Sydney opera house',
      latitude: -38.63909685,
      longitude: 58.63909685,
      cameraId: '#Dsler HD 893',
      photoUrl: '/path/to/species-image.jpg'
    }
  ];
}
