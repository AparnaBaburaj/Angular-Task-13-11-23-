import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-task';


  ngOnInit(): void {
    this.example();
  }

  
example(){
  var variable1='Hello Good Morning!';
  let variable2=' IT world';
  const variable3='Welcome';
  
  if(2>1){
    var variable1='Good bye';
    let variable2='Nice to Meet You';

    console.log('1',variable1);
    console.log('2',variable2);
    console.log('3',variable3);
  }
    console.log('4',variable1);
    console.log('5',variable2);
    console.log('6',variable3);

}

}
