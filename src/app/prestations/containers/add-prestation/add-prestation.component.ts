import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private ps: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation) {
    this.ps.add(item).then(() =>
      this.router.navigate(['../'], {relativeTo: this.route}) // .then permet d'attendre la réponse avant de réaliser la redirection
    );
    //avec un endpoint http
    // this.ps.add(item).subscribe((data) =>
    //   this.router.navigate(['../'], {relativeTo: this.route})
    // );
  }

}
