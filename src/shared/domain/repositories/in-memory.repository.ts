import { Entity } from '../entities/entity'
import { RepositoryInterface } from './repository-contracts'

export abstract class InMemoryRepository<
  E extends Entity<unknown>,
> implements RepositoryInterface<E> {
  protected items: E[] = []

  insert(entity: E): Promise<void> {
    const entityIndex = this.items.findIndex(item => item.id === entity.id)

    if (entityIndex === -1) {
      this.items.push(entity)
    } else {
      this.items[entityIndex] = entity
    }

    return Promise.resolve()
  }

  findById(id: string): Promise<E | null> {
    const entity = this.items.find(item => item.id === id)

    return Promise.resolve(entity ?? null)
  }

  findAll(): Promise<E[]> {
    return Promise.resolve([...this.items])
  }

  update(entity: E): Promise<void> {
    const entityIndex = this.items.findIndex(item => item.id === entity.id)

    if (entityIndex === -1) {
      return Promise.reject(new Error(`Entity with id ${entity.id} not found`))
    }

    this.items[entityIndex] = entity

    return Promise.resolve()
  }

  delete(id: string): Promise<void> {
    const entityIndex = this.items.findIndex(item => item.id === id)

    if (entityIndex === -1) {
      return Promise.reject(new Error(`Entity with id ${id} not found`))
    }

    this.items.splice(entityIndex, 1)

    return Promise.resolve()
  }
}
