import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-studentsdetail',
  templateUrl: './studentsdetail.component.html',
  styleUrl: './studentsdetail.component.scss'
})
export class StudentsdetailComponent {
  //Sử dụng input đầu vào để tìm nạp thông tin chi tiết về học sinh từ thành phần ứng dụng gốc mà chúng ta đã chuyển qua trước đó.
  @Input() students! : any

  //Content Child
  //sử dụng nội dung con để truy cập phần tử DOM mà chúng ta đã chiếu bằng cách sử dụng chỉ thị nội dung ng
  //và màu biến tham chiếu mẫu có dấu băm.
  @ContentChild("color") contentColor!  : ElementRef

  //Chúng ta cần sử dụng angular lifecycle hooks ngContentAfterInit,
  //móc này sẽ kích hoạt sau khi chế độ xem của chúng ta được khởi tạo và nội dung được chiếu
  ngAfterContentInit(): void {

    //Content Child
    //Bảng điều khiển Ghi lại thuộc tính con nội dung để xem chi tiết thành phần DOM nếu chúng ta muốn.
    console.log(this.contentColor);
    //Bây giờ, chúng ta có thể truy cập phần tử DOM và thay đổi các thuộc tính khác nhau theo nhu cầu của mình.
    //Ở đây chúng ta thay đổi màu của tiêu đề
    this.contentColor.nativeElement.setAttribute('style','color: blue')
  }
}
