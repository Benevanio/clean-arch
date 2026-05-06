export interface EnvConfig {
  getAppPort(): number;
  getNodeEnv(): string;
  getDatabaseHost(): string;
  getDatabasePort(): number;
  getDatabaseUser(): string;
  getDatabasePassword(): string;
  getDatabaseName(): string;
}
