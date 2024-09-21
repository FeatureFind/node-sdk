import { createAuthResource } from "./resources/auth";

export class FeatureFind {
  constructor(apiKey) {
    this.apiKey = apiKey;

    // Initialize SDK resources
    this.auth = createAuthResource(this.apiKey);
  }
}
