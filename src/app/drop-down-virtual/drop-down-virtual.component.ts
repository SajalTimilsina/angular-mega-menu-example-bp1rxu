import { ChangeDetectorRef, ElementRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxDropDownComponent, ConnectedPositioningStrategy, HorizontalAlignment,
    ISelectionEventArgs, NoOpScrollStrategy, VerticalAlignment, AbsoluteScrollStrategy } from "igniteui-angular";

@Component({
  selector: "app-drop-down-virtual",
  templateUrl: "./drop-down-virtual.component.html",
  styleUrls: ["./drop-down-virtual.component.scss"]
})
export class DropDownVirtualComponent implements OnInit {
  @ViewChild("dropdown", { read: IgxDropDownComponent, static: true })
  public dropDown: IgxDropDownComponent;
  
  @ViewChild("dropdown2", { read: IgxDropDownComponent, static: true })
  public dropDown2: IgxDropDownComponent;
  
  @ViewChild("dropdown3", { read: IgxDropDownComponent, static: true })
  public dropDown3: IgxDropDownComponent;

  @ViewChild("navbar", { static: true })
  public navbar: ElementRef;
  public closed: Boolean = true;

  public overlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: false,
        closeOnOutsideClick: false
  };

  constructor() {}

  public ngOnInit() {
  }

  public actionExc(evt, ddIndex) {
    this.overlaySettings.positionStrategy.settings.target =  this.navbar.nativeElement.children[1];

    switch(ddIndex) {
      case 1: 
        this.dropDown.toggle(this.overlaySettings);
        this.dropDown2.close();
        this.dropDown3.close();
        break;
      case 2:
        this.dropDown2.toggle(this.overlaySettings);
        this.dropDown.close();
        this.dropDown3.close();
        break;
      case 3:
        this.dropDown3.toggle(this.overlaySettings);
        this.dropDown.close();
        this.dropDown2.close();
        break;
      default:
        break;
    }
  }
}
