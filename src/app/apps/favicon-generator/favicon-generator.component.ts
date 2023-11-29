import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  UltColorPickerModule,
  UltFormsModule,
  UltPopoverModule,
  UltSliderModule
} from '@ultima-ui/components';
import Konva from 'konva';
import { UltSelectModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSliderModule,
    UltFormsModule,
    UltColorPickerModule,
    UltPopoverModule,
    UltSelectModule
  ],
  templateUrl: './favicon-generator.component.html'
})
export class FaviconGeneratorComponent implements OnInit {
  @ViewChild('container', { static: true }) private _containerRef: ElementRef;
  @ViewChild('preview', { static: true }) private _previewRef: ElementRef;
  private _renderer = inject(Renderer2);
  private _document = inject(DOCUMENT);

  backgroundColor = '#3b82f6';
  color = '#fff';
  text = 'S';
  borderRadius = 5;
  fontFamily = 'Golos Text';
  fontWeight = '700';
  fontSize = 20;
  borderWidth = 0;
  borderColor = '#3b82f6';

  _stage: Konva.Stage;
  _background: Konva.Rect;
  _text: Konva.Text;
  _multiplier = 0;
  _loadedFontsMap = new Map();

  ngOnInit() {
    this._loadedFontsMap.set('Golos Text', true);
    this._multiplier = Math.round(200 / 32);
    this._stage = new Konva.Stage({
      container: this._containerRef.nativeElement,
      width: 200,
      height: 200
    });
    const layer = new Konva.Layer();
    this._background = new Konva.Rect({
      x: 0,
      y: 0,
      width: this._stage.width() - this.borderWidth * 2,
      height: this._stage.height() - this.borderWidth * 2,
      fill: this.backgroundColor,
      stroke: this.borderColor,
      strokeWidth: this.borderWidth,
      cornerRadius: this.borderRadius * this._multiplier,
    });
    this._text = new Konva.Text({
      x: 0,
      y: 0,
      width: this._stage.width(),
      height: this._stage.height(),
      align: 'center',
      verticalAlign: 'middle',
      text: this.text,
      fontSize: this.fontSize * this._multiplier,
      fontFamily: 'Golos Text',
      fontStyle: this.fontWeight,
      fill: this.color,
      draggable: true,
    });
    this._text.on('dragend',  () => {
      this._makeImage();
    });
    const transformer = new Konva.Transformer();
    layer.add(this._background);
    layer.add(this._text);
    layer.add(transformer);
    this._stage.add(layer);
    layer.draw();
    this._makeImage();
  }

  changeText() {
    this._text.setText(this.text);
    this._makeImage();
  }

  changeFontSize() {
    this._text.fontSize(this.fontSize * this._multiplier);
    this._makeImage();
  }

  fontWeightChange() {
    this._text.fontStyle(this.fontWeight);
    this._makeImage();
  }

  changeBorderRadius() {
    this._background.cornerRadius(this.borderRadius * this._multiplier);
    this._makeImage();
  }

  changeBorderWidth() {
    console.log(this.borderWidth);
    this._background.strokeWidth(this.borderWidth);
    this._background.x(this.borderWidth / 2);
    this._background.y(this.borderWidth / 2);
    this._background.width(200 - this.borderWidth);
    this._background.height(200 - this.borderWidth);
    this._makeImage();
  }

  colorChanged(color: string) {
    this.color = color;
    this._text.fill(color);
    this._makeImage();
  }

  backgroundColorChanged(color: string) {
    this.backgroundColor = color;
    this._background.fill(color);
    this._makeImage();
  }

  fontFamilyChange() {
    if (!this._loadedFontsMap.has(this.fontFamily)) {
      this._loadFont(this.fontFamily);
    } else {
      this._text.fontFamily(this.fontFamily);
      this._makeImage();
    }
  }

  private _makeImage() {
    this._stage.toImage().then((img: any) => {
      this._renderer.setAttribute(this._previewRef.nativeElement, 'src', img.src);
      const link: any = this._document.querySelector('#favicon');
      this._renderer.setAttribute(link, 'type', 'image/png');
      this._renderer.setAttribute(link, 'href', img.src);
    });
  }

  private _loadFont(name: string) {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${name.replace(' ', '+')}:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`;
    this._document.getElementsByTagName('head')[0].appendChild(link);
    link.onload = () => {
      this._loadedFontsMap.set(name, true);
      this._text.fontFamily(name);
      this._makeImage();
    };
  }
}
