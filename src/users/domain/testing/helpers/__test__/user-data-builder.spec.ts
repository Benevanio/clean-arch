/* eslint-disable @typescript-eslint/unbound-method */

import { faker } from '@faker-js/faker'
import { UserDataBuilder } from '../user-data-builder'

jest.mock('@faker-js/faker', () => ({
  faker: {
    datatype: {
      uuid: jest.fn(),
    },
    name: {
      fullName: jest.fn(),
    },
    internet: {
      email: jest.fn(),
      password: jest.fn(),
    },
  },
}))

describe('UserDataBuilder', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('deve retornar os valores informados nos props', () => {
    const createdAt = new Date('2026-01-01')

    const result = UserDataBuilder({
      id: '1',
      name: 'Bene',
      email: 'bene@test.com',
      password: '123456',
      createdAt,
    })

    expect(result).toEqual({
      id: '1',
      name: 'Bene',
      email: 'bene@test.com',
      password: '123456',
      createdAt,
    })
  })

  it('deve gerar valores utilizando faker quando props não forem informados', () => {
    const fakeDate = new Date()

    jest.spyOn(global, 'Date').mockImplementation(() => fakeDate)
    ;(faker.datatype.uuid as jest.Mock).mockReturnValue('fake-id')
    ;(faker.name.fullName as jest.Mock).mockReturnValue('Fake User')
    ;(faker.internet.email as jest.Mock).mockReturnValue('fake@test.com')
    ;(faker.internet.password as jest.Mock).mockReturnValue('fake-password')

    const result = UserDataBuilder({})

    expect(result).toEqual({
      id: 'fake-id',
      name: 'Fake User',
      email: 'fake@test.com',
      password: 'fake-password',
      createdAt: fakeDate,
    })

    expect(faker.datatype.uuid).toHaveBeenCalledTimes(1)
    expect(faker.name.fullName).toHaveBeenCalledTimes(1)
    expect(faker.internet.email).toHaveBeenCalledTimes(1)
    expect(faker.internet.password).toHaveBeenCalledTimes(1)

    jest.restoreAllMocks()
  })

  it('deve utilizar apenas os campos faltantes do faker', () => {
    ;(faker.internet.email as jest.Mock).mockReturnValue('generated@test.com')

    const result = UserDataBuilder({
      id: '1',
      name: 'Bene',
      password: '123456',
    })

    expect(result.id).toBe('1')
    expect(result.name).toBe('Bene')
    expect(result.password).toBe('123456')
    expect(result.email).toBe('generated@test.com')
  })
})
