import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //serverElements = [{type:'server',name:'Testserver',content:'just a test!'}];
  
  //onServerAdded(serverData:{serverName: string, serverContent: string}) {
   // this.serverElements.push({
     // type: 'server',
      //name: serverData.serverName,
      //content: serverData.serverContent}
      oddnumbers:Number[]=[];
      evennumbers:Number[]=[];
  //  });
  

  //onBlueprintAdded(blueprintData:{serverName: string, serverContent: string}) {
    //this.serverElements.push({
      //type: 'blueprint',
      //name: blueprintData.serverName,
     // content: blueprintData.serverContent
   // });
 // }
//onChangeFirst() {
  //this.serverElements[0].name='changed!';
//}

onintervalFired(firednumber:number) {
  if(firednumber %2 ===0){
    this.evennumbers.push(firednumber)
  }
  else{
    this.oddnumbers.push(firednumber)
  }
}
}


