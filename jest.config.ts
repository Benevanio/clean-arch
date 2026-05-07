import type { Config } from 'jest'

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',

  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },

  // 2. Localização dos Testes
  // Procura .spec.ts (unitários) e .e2e-spec.ts (integração)
  testRegex: '.*\\.(spec|e2e-spec)\\.ts$',

  // 3. Mapeamento de Paths (Alinhado ao tsconfig.json)
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@common/(.*)$': '<rootDir>/src/common/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },

  // 4. Cobertura de Código (Code Coverage)
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    '!src/**/*.module.ts', // Ignora módulos (boilers)
    '!src/**/*.spec.ts', // Ignora os próprios testes
    '!src/main.ts', // Ignora entry point
    '!src/**/index.ts', // Ignora arquivos de exportação
    '!src/**/*.entity.ts', // Opcional: ignora entidades
    '!src/**/*.dto.ts', // Opcional: ignora DTOs
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'lcov', 'html'], // Gera relatório visual em HTML

  // 5. Limpeza e Reset (Evita poluição entre testes)
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,

  // 6. Performance e Estabilidade
  maxWorkers: '50%', // Usa metade dos núcleos (evita travar o PC)
  logHeapUsage: true, // Avisa se um teste estiver consumindo memória demais
  errorOnDeprecated: true,

  // 7. Setup (Se precisar de algo rodando antes de todos os testes)
  // setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],

  // 8. Timeout (NestJS às vezes demora a subir o AppModule em E2E)
  testTimeout: 30000,
}

export default config
