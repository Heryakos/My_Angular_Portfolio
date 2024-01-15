import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayFlags: {[key: string]: boolean} = {};

  constructor() {
    this.initializeDisplayFlags();
  }

  ngOnInit() {
    // Retrieve the active button from local storage
    const activeButton = localStorage.getItem('activeButton');
    if (activeButton) {
      this.showDisplay(activeButton);
    }
  }

  initializeDisplayFlags() {
    const lookupTables = [
      'customerStatus', 'customerType', 'titleDeedTransfer', 'familyRelationshipType', 'leaseOwnedStatus',
      'leaseType', 'measurementFee', 'plotTypeofUse', 'plotStatus', 'propertyStatus', 'propertyType',
      'suspensionReason','sTransactionSalesType', 'PropertyUse', 'woredasList', 'woredasGroup', 'annualServicePlan', 'serviceDetail',
      'serviceFee', 'taskFee', 'country', 'serviceBlockRegistration'
    ];
  
    for (const table of lookupTables) {
      this.displayFlags[table] = table === 'customerStatus';
    }
  }

  showDisplay(property: string) {
    for (const key in this.displayFlags) {
      this.displayFlags[key] = key === property;
    }

    // Store the active button in local storage
    localStorage.setItem('activeButton', property);
  }
}