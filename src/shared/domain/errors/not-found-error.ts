export class NotFoundError extends Error {
  constructor(entityName: string, entityId: string) {
    super(`${entityName} with id ${entityId} not found`)
    this.name = 'NotFoundError'
  }
}
