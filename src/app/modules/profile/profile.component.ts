import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserStateService } from '@app/core/services/user-state.service';
import { Web3AuthService } from '@app/core/web3auth/web3auth.service';
import { BehaviorSubject, map, Subscription } from 'rxjs';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: {
        class: 'flex flex-auto w-full h-full'
  }
})
export class ProfileComponent implements OnInit, OnDestroy {

  subs: Subscription = new Subscription();
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  routeValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private userStateService: UserStateService) {
    this.routeValue$.next(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routeValue$.next(event.url);
      }
    });
  }

  ngOnInit() {
    this.subs.add(
      this.userStateService.isLoading.subscribe((value: boolean) => {
        this.loading$.next(value);
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
