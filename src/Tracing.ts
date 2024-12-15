import { NodeSDK } from '@opentelemetry/sdk-node';
import { TracingConfig } from './TracingConfig.interface';
import { TracingDefaultConfig } from './TracingConfigDefault';

export class Tracing {
  static init(configuration: Partial<TracingConfig>): NodeSDK {
    const otelSDK = new NodeSDK({
      ...TracingDefaultConfig,
      ...configuration,
    });
    otelSDK.start();
    return otelSDK;
  }
}
