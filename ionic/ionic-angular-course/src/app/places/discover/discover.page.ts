import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/core';
// import { MenuController } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];

  constructor(
    private route: ActivatedRoute,
    private placeService: PlacesService // private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.loadedPlaces = this.placeService.places;
      this.listedLoadedPlaces = this.loadedPlaces.slice(1);
    });
  }

  // onOpenMenu() {}

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
