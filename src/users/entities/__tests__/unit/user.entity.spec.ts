import { faker } from '@faker-js/faker'
import { User } from '../user.entity'

describe('UserEntity', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
  it('Should create a Json object with the correct properties', () => {
    const user = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    const userEntity = new User(user)
    const json = userEntity.toJSON()

    expect(json).toEqual({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: userEntity.createdAt,
    })
  })
})
