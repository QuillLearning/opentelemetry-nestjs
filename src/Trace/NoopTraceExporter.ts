import { ReadableSpan, SpanExporter } from '@opentelemetry/sdk-trace-base';
import { ExportResult } from '@opentelemetry/core';

export class NoopSpanExporter implements SpanExporter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export(_spans: ReadableSpan[]): Promise<ExportResult> {
    return Promise.resolve({ code: 0 });
  }

  shutdown(): Promise<void> {
    return Promise.resolve();
  }
}
