import { ExportResult } from '@opentelemetry/core';
import { LogRecord, LogRecordExporter } from '@opentelemetry/sdk-logs';

export class NoopLogRecordExporter implements LogRecordExporter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export(_logs: LogRecord[]): Promise<ExportResult> {
    return Promise.resolve({ code: 0 });
  }

  shutdown(): Promise<void> {
    return Promise.resolve();
  }
}
