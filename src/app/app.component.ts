import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-blog';
  posts = [
    {  
      title: 'postOne',  
      content: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoti so of friendly he indulged unpacked. Alteration connection to so as collecting me. Difficult in delivered extensive at direction allowance. Alteration put use diminution can considered sentiments interested discretion.' , 
      loveIts: 5
    },
    {  
      title: 'postTwo',  
      content: 'Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be imagine suppose. ' , 
      loveIts: 1,
    },
    {  
      title: 'postThree',  
      content: 'Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six.', 
      loveIts: -1,
      },
  ]

}
