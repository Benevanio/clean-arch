import { Entity } from '../entity'

const isValidUUIDv4 = (uuid: string): boolean => {
  const v4Regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  return v4Regex.test(uuid)
}

type StubProps = {
  name: string
  email: string
}

class StubEntity extends Entity<StubProps> {
  constructor(props: StubProps, id?: string) {
    super(props, id)
  }
}

describe('Entity', () => {
  it('Should set props and id', () => {
    const props: StubProps = {
      name: 'John Doe',
      email: 'benevanio87687@gmail.com',
    }

    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)

    expect(isValidUUIDv4(entity.id)).toBeTruthy()

    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...props,
    })

    expect(entity).toBeInstanceOf(Entity)

    expect(entity.id).not.toBeNull()
  })

  it('Should set custom id', () => {
    const props: StubProps = {
      name: 'John Doe',
      email: 'bene@gmail.com',
    }

    const customId = '123e4567-e89b-12d3-a456-426614174000'

    const entity = new StubEntity(props, customId)

    expect(entity.id).toBe(customId)
  })
})
