import { Entity } from '@/shared/domain/entities/entity'
import { InMemoryRepository } from '../../in-memory.repository'

type StubEntityProps = {
  name: string
  price: number
}
class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe('InMemoryRepository Unit Tests', () => {
  let repository: StubInMemoryRepository

  beforeEach(() => {
    repository = new StubInMemoryRepository()
  })

  it('should insert a new entity', async () => {
    const entity = new StubEntity({ name: 'Test', price: 10 })
    await repository.insert(entity)

    const foundEntity = await repository.findById(entity.id)
    expect(foundEntity).toEqual(entity)
  })

  it('should update an existing entity', async () => {
    const entity = new StubEntity({ name: 'Test', price: 10 })
    await repository.insert(entity)

    entity.props.price = 20
    await repository.update(entity)

    const updatedEntity = await repository.findById(entity.id)
    expect(updatedEntity?.props.price).toBe(20)
  })

  it('should delete an existing entity', async () => {
    const entity = new StubEntity({ name: 'Test', price: 10 })
    await repository.insert(entity)

    await repository.delete(entity.id)

    const foundEntity = await repository.findById(entity.id)
    expect(foundEntity).toBeNull()
  })

  it('should find all entities', async () => {
    const entity1 = new StubEntity({ name: 'Test1', price: 10 })
    const entity2 = new StubEntity({ name: 'Test2', price: 20 })
    await repository.insert(entity1)
    await repository.insert(entity2)

    const allEntities = await repository.findAll()
    expect(allEntities).toEqual([entity1, entity2])
  })
})
