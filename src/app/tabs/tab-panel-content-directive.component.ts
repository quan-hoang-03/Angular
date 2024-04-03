import { Directive } from '@angular/core';

@Directive({
  selector: 'ng-template[tabPanelContent]',
})
export class TabPanelContentDirective {
  constructor() {}
}
//Directive sẽ giúp chúng ta thêm các tính năng lên một phần tử (DOM Node, Component chẳng hạn),
//chúng ta có thể thấy directive ở trên muốn target đến bất kỳ thẻ ng-template nào có kèm thêm attribute [tabPanelContent]
