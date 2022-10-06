import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarState } from '@app/core/models/sidebar-type-interface.model';
import { UserEntity } from '@app/core/models/user-interface.model';
import { UserStateService } from '@app/core/services/user-state.service';
import { Web3AuthService } from '@app/core/web3auth/web3auth.service';
import { SnackNotifierService } from '@app/modules/landing/modules/snack-bar-notifier/snack-bar-notifier.service';
import { SidenavStateService } from '@app/shared/services/sidenav-state.service';
import { SideProfileStateService } from '@app/shared/services/sideprofile-state.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'totem-profile-dropdown',
  templateUrl: './totem-profile-dropdown.component.html',
  styleUrls: ['./totem-profile-dropdown.component.scss']
})
export class TotemNavSidebarComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription();
  sidebarIsOpen: boolean = false;
  userData: UserEntity | null = {};
  user$: BehaviorSubject<UserEntity | null> = new BehaviorSubject<UserEntity | null>(null);
  wallet: string | undefined = '';
  userSlicedName: string = '';
  walletNumber!: string;

  @Output() logOutEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private sideProfileStateService: SideProfileStateService,
    private web3Auth: Web3AuthService,
    private router: Router,
    private snackNotifierService: SnackNotifierService,
    private userStateService: UserStateService
    ) { }

  ngOnInit(): void {
    this.sideProfileStateService.sideprofStatus.subscribe((data: boolean) => {
      this.sidebarIsOpen = data;
    });
    this.initUserListener();
    this.listenAccountInfo();
  }

  listenAccountInfo() {
    this.subs.add(
      this.userStateService.currentUser.subscribe((user: UserEntity | null) => {
        this.user$.next(user);
      })
    )
  }

  initUserListener() {
    this.subs.add(
      this.user$.subscribe((user: UserEntity | null) => {
        if (user) {
          this.userData = user;
          if (this.userData?.name?.length! > 16) {
            this.userSlicedName = this.userData!.name?.slice(0, 16) + '...';
          }
          this.wallet = this.userData?.wallet;
          this.walletNumber = this.wallet?.slice(0, 6) + '...' + this.wallet?.slice(-4);
        }
      })
    )
  }

  close() {
    this.sideProfileStateService.updateState(false);
  }

  onLogout() {
    this.logOutEvent.emit(true);
  }

  notify() {
    this.snackNotifierService.open('Copied to the clipboard');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
