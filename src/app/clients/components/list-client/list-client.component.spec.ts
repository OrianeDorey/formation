import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientComponent } from './list-client.component';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from '../../clients-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientService } from 'src/app/prestations/services/client.service';

describe('ListClientComponent', () => {
  let component: ListClientComponent;
  let fixture: ComponentFixture<ListClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClientComponent ],
      imports: [
        CommonModule, ClientsRoutingModule, SharedModule
      ],
      providers: [ClientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
