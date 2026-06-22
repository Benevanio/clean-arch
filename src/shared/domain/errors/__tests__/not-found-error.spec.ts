import { NotFoundError } from '../not-found-error'

describe('NotFoundError', () => {
  it('should create a NotFoundError with the correct message', () => {
    const entityName = 'User'
    const entityId = '123'
    const error = new NotFoundError(entityName, entityId)

    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('NotFoundError')
    expect(error.message).toBe(`${entityName} with id ${entityId} not found`)
  })
})
