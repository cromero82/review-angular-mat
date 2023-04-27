import { Component, OnInit } from '@angular/core';
import { InputCM } from '../models/input-cm';

@Component({
  selector: 'app-table-hot',
  templateUrl: './table-hot.component.html',
  styleUrls: ['./table-hot.component.css']
})
export class TableHotComponent implements OnInit {

  inputCm!: InputCM;

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  messages = [
    {
      from: 'Nirav joshi (nbj@gmail.com)',
      image: 'assets/images/users/1.jpg',
      subject: 'Material angular',
      content: 'This is the material angular template'
    },
    {
      from: 'Sunil joshi (sbj@gmail.com)',
      image: 'assets/images/users/2.jpg',
      subject: 'Wrappixel',
      content: 'We have wrappixel launched'
    },
    {
      from: 'Vishal Bhatt (bht@gmail.com)',
      image: 'assets/images/users/3.jpg',
      subject: 'Task list',
      content: 'This is the latest task hasbeen done'
    }
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];

  constructor() { }

  ngOnInit(): void {
    const json = `{
      "data": [
        {
          "id": "620643e45add3d00013c0dcc",
          "key": "Sta",
          "label": "Sta",
          "widget": "Combo",
          "service": "FSP",
          "rolld": "",
          "order": 7,
          "isAdvanced": [],
          "keyCombo": [],
          "labelCombo": []
        },
        {
          "id": "620643e45add3d00013c0dc4",
          "key": "size",
          "label": "size",
          "widget": "Text",
          "service": "FSP",
          "rolld": "",
          "order": 3,
          "isAdvanced": [],
          "keyCombo": [],
          "labelCombo": []
        },
        {
          "id": "620643e45add3d00013c0dca",
          "key": "reqTy",
          "label": "reqTy",
          "widget": "Combo",
          "service": "FSP",
          "rolld": "",
          "order": 6,
          "isAdvanced": [],
          "keyCombo": [],
          "labelCombo": []
        },
        {
          "id": "620643e45add3d00013c0dce",
          "key": "id",
          "label": "id",
          "widget": "Text",
          "service": "FSP",
          "rolld": "",
          "order": 8,
          "isAdvanced": [],
          "keyCombo": [],
          "labelCombo": []
        },
        {
          "id": "620643e45add3d00013c0dc8",
          "key": "fileName",
          "label": "fileName",
          "widget": "Text",
          "service": "FSP",
          "rolld": "",
          "order": 5,
          "isAdvanced": [],
          "keyCombo": [],
          "labelCombo": []
        },
        {
          "id": "620643e45add3d00013c0dc2",
          "key": "creationDate",
          "label": "creationDate",
          "widget": "Text",
          "service": "FSP",
          "rolld": "",
          "order": 2,
          "isAdvanced": [],
          "keyCombo": [],
          "labelCombo": []
        },
        {
          "success": true,
          "errors": [],
          "lastUpdate": "2023-04-27 12:13:18.000344",
          "pagination": {
            "currentPage": 0,
            "totalltems": 8,
            "totalPages": 1,
            "pageSize": 10000
          }
        }
      ]
    }`;
    
    this.inputCm = JSON.parse(json)
    debugger;
  }

}
