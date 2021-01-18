import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../services/properties.service';
import firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  properties: any[] = [];
  propertiesSubscription!: Subscription;
  isLoggedIn = false;
  categorice$;
  filteredProperties: any[] = [];
  category = '';
  

  constructor(
    private route : ActivatedRoute,
    private propertiesService: PropertiesService,
    private categoryService: CategoryService
  ) { 
    this.categorice$= this.categoryService.getCategories();
    this.route.queryParamMap.subscribe(params=>{
      this.category = params.get('category');
      this.filteredProperties = (this.category) ?
      this.properties.filter(p => p.payload.val().category === this.category) : this.properties;
    })
    
  }

  ngOnInit(): void {

    firebase.auth().onAuthStateChanged(
      (userSession) => {
        if (userSession){
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
        
      }
    );



    this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (data: any[]) => {
        this.properties = data;
      }
    );
    this.propertiesService.getProperties();

  }

  getSoldValue = (sold) => {
    if (sold) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
  }
}
