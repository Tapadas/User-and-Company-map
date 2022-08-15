/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { company } from "faker";

export class CustomMap {
  private googleMap:google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0 
      }
    });
  }

  addMarket(mappable: User | Company) :void {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location
    })
  }

}

