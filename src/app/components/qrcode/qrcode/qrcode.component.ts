import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  @Input() width: string;
  @Input() height: string;
  @Input() data: string;
  @Input() encoding: string;
  @Input() correction: string;

  @ViewChild('qrcode') el: ElementRef;

  constructor() { }

  ngOnInit() {

    var image = document.createElement("img");

    var url = "https://chart.googleapis.com/chart?cht=qr&chs=" + this.width + "x" + this.height + "&chl=" + this.data + "&choe=" + this.encoding + "&chld=" + this.correction;

    image.setAttribute("src", url);

    this.el.nativeElement.appendChild(image);

  }

}
