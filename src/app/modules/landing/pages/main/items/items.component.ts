import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AssetsService } from "@app/core/services/assets/assets.service";
import { Gtag } from "angular-gtag";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  host: {
    class: 'px-[20px] lg:pt-[40px] min-h-[calc(100vh-70px)]'
  }
})

export class ItemsComponent implements OnDestroy {

  constructor(
    private assetsService: AssetsService,
    private gtag: Gtag,
    private activatedRoute: ActivatedRoute
  ) {
    this.gtag.event('page_view');
  }

  subs = new Subject<void>();
  items!: any[] | null;

  async ngOnInit() {
    this.updateAssets();
    this.assets$();
  }

  updateAssets() {
    const search = this.activatedRoute.snapshot.queryParams["searchParams"];
    this.assetsService.updateAssets('item', 1, 'newest', { search }).subscribe(() => {
    });
    this.assetsService.items$
      .pipe(takeUntil(this.subs))
      .subscribe(items => {
        this.items = items;
      })
  }

  assets$() {
    this.assetsService.items$
      .pipe(takeUntil(this.subs))
      .subscribe(items => {

        this.items = items;
      })
  }

  onSort(sortMethod: any) {
    this.assetsService.updateAssets('item', 1, sortMethod).subscribe();
  }

  onLoadMore(page: number) {
    this.assetsService.updateAssets('item', page, 'newest').subscribe();
  }

  ngOnDestroy(): void {
    this.subs.next();
    this.subs.complete();
    this.assetsService.reset();
  }
}
