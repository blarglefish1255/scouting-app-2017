import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the TheBlueAllianceServiceProvider provider.
*/
@Injectable()
export class TheBlueAllianceServiceProvider {

  private readonly BASE_API_HOSTNAME = 'https://www.thebluealliance.com/api/v3'
  // TODO: MOVE THIS TO SOMEWHERE EXTERNAL
  private readonly ACCESS_KEY = 'XhWYq5QxZ5f5SiLQpyoturaSdAYlZup3OjvjVSYpfAjHuEXnXSTB5St0wfoOzX76'

  constructor(public http: Http) {
    
  }

  getTeamList(pageNumber) {
    // Request from the api, the teams endpoint at the specified
    // pagination page. We will get back a list of teams in that
    // page.
    const teams = this.theBlueAllianceGetRequest(`teams/${pageNumber}`)
    return teams
  }

  getEventList() {
    // Request from the api, the events endpoint for a specified,
    // year which we are currently hardcoding to 2017 but can be
    // changed to be dynamic in the future.
    const events = this.theBlueAllianceGetRequest(`events/2017`)
    return events
  }

  // Make a GET request to TheBlueAlliance API
  private theBlueAllianceGetRequest(endpoint) {
    let headers = new Headers()

    // Set the access token in the request headers.
    headers.append('X-TBA-Auth-Key', this.ACCESS_KEY)

    const response = this.http.get(`${this.BASE_API_HOSTNAME}/${endpoint}`, { headers: headers }).map(response => response.json())
    return response
  }

}
