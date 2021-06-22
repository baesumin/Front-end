import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';
// import { MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  private placesSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlacesService // private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(() => {
    //   this.loadedPlaces = this.placeService.places;
    //   this.listedLoadedPlaces = this.loadedPlaces.slice(1);
    // });

    this.placesSub = this.placeService.places.subscribe((places) => {
      this.loadedPlaces = places;
      this.listedLoadedPlaces = this.loadedPlaces.slice(1);
    });
  }

  ngOnDestroy() {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }

  // onOpenMenu() {}

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
