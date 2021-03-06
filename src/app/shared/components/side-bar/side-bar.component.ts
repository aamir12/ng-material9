import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit {
  constructor() {}
  links: any[];
  ngOnInit() {
    this.links = [
      {
        name: "Grid List",
        link: "/grid-list",
      },
      {
        name: "Stepper",
        link: "/stepper",
      },
      {
        name: "Tabs",
        link: "/tabs",
      },
      {
        name: "Expansion Panel",
        link: "/expansion-panel",
      },
      {
        name: "Form",
        link: "/form",
      },
      {
        name: "Material Inputs",
        link: "/matInputs",
      },
      {
        name: "Sorting",
        link: "/sorting",
      },
      {
        name: "Flexlayout",
        link: "/flexlayout",
      },
      {
        name: "Flex Design",
        link: "/flexDesign",
      },
      {
        name: "Employees",
        link: "/employees",
      },
      {
        name: "Responsive Layout",
        link: "/responsiveLayout",
      },
      {
        name: "Table",
        link: "/table",
      },
      {
        name: "Router outlet",
        link: "/routlet",
      },
      // {
      //   name: "Dynamic table",
      //   link: "/dtable",
      // }
    ];
  }
}
