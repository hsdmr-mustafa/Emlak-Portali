import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ImmoBab';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCqSOjaNRtVH1KteWLNaCosQbA3d3NkKJc",
      authDomain: "emlak-portali.firebaseapp.com",
      databaseURL: "https://emlak-portali-default-rtdb.firebaseio.com",
      projectId: "emlak-portali",
      storageBucket: "emlak-portali.appspot.com",
      messagingSenderId: "227995144916",
      appId: "1:227995144916:web:0ca68526ab11d14c3ce141",
      measurementId: "G-WZFZW2WNVW"
    };

    firebase.initializeApp(firebaseConfig);
  }

}
