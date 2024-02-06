import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}

// * Inject()

// import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
// import { LoggingService } from '../logging.service';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrl: './account.component.css',
//   providers: [LoggingService],
// })
// export class AccountComponent {
//   @Input() account: { name: string; status: string };
//   @Input() id: number;
//   @Output() statusChanged = new EventEmitter<{
//     id: number;
//     newStatus: string;
//   }>();

//   private loggingService?: LoggingService;

//   constructor() {
//     this.loggingService = inject(LoggingService);
//   }

//   onSetTo(status: string) {
//     this.statusChanged.emit({ id: this.id, newStatus: status });
//     this.loggingService.logStatusChange(status);
//   }
// }
