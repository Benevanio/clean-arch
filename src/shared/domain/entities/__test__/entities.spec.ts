import { faker } from '@faker-js/faker'
import { Entity } from '../entity'

// Função auxiliar para validar se a string é um UUID v4 gerado pelo crypto
const isValidUUIDv4 = (uuid: string): boolean => {
  const v4Regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return v4Regex.test(uuid)
}

type TestProps = {
  name: string
  email: string
}

class TestEntity extends Entity<TestProps> {
  constructor(props: TestProps, id?: string) {
    super(props, id)
  }
}

describe('Entity', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create entity with generated id', () => {
    const props: TestProps = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    }

    const entity = new TestEntity(props)

    expect(entity.id).toBeDefined()
    expect(typeof entity.id).toBe('string')

    // Nova asserção: valida se o ID gerado segue estritamente o formato UUID v4
    expect(isValidUUIDv4(entity.id)).toBe(true)

    expect(entity.props).toEqual(props)
  })

  it('should create entity with provided id', () => {
    const props: TestProps = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    }

    const entity = new TestEntity(props, 'custom-id')

    expect(entity.id).toBe('custom-id')
  })

  it('should return correct json representation', () => {
    const props: TestProps = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    }

    const entity = new TestEntity(props, 'entity-id')

    expect(entity.toJSON()).toEqual({
      id: 'entity-id',
      ...props,
    })
  })

  it('should expose getter id correctly', () => {
    const props: TestProps = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    }

    const entity = new TestEntity(props, 'getter-id')

    expect(entity.id).toBe('getter-id')
  })
})
