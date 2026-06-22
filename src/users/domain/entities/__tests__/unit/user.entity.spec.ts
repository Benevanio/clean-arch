import { EntityValidationError } from '@/shared/domain/errors/validation-error'
import { UserValidatorFactory } from '@/users/domain/validator/validator-user.validator'
import { UserEntity } from '../../user.entity'

jest.mock('@/users/domain/validator/validator-user.validator', () => ({
  UserValidatorFactory: {
    create: jest.fn(),
  },
}))

describe('UserEntity', () => {
  const mockDate = new Date('2026-01-01T00:00:00.000Z')

  const props = {
    id: '1',
    name: 'Bene',
    email: 'bene@test.com',
    password: '123456',
    createdAt: mockDate,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('constructor', () => {
    it('deve criar uma entidade com createdAt informado', () => {
      const entity = new UserEntity(props)

      expect(entity.id).toBe(props.id)
      expect(entity.name).toBe(props.name)
      expect(entity.email).toBe(props.email)
      expect(entity.password).toBe(props.password)
      expect(entity.createdAt).toBe(mockDate)
    })

    it('deve criar uma entidade usando a data atual quando createdAt não for informado', () => {
      const entity = new UserEntity({
        id: '1',
        name: 'Bene',
        email: 'bene@test.com',
        password: '123456',
      })

      expect(entity.createdAt).toBeInstanceOf(Date)
    })
  })

  describe('validate', () => {
    it('deve retornar true quando os dados forem válidos', () => {
      const validate = jest.fn().mockReturnValue(true)

      ;(UserValidatorFactory.create as jest.Mock).mockReturnValue({
        validate,
      })

      const result = UserEntity.validate(props)

      expect(result).toBe(true)
      expect(validate).toHaveBeenCalledWith(props)
    })

    it('deve lançar EntityValidationError quando os dados forem inválidos', () => {
      const errors = {
        name: ['Nome inválido'],
      }

      const validate = jest.fn().mockReturnValue(false)

      ;(UserValidatorFactory.create as jest.Mock).mockReturnValue({
        validate,
        errors,
      })

      expect(() => UserEntity.validate(props)).toThrow(EntityValidationError)
    })
  })

  describe('getters', () => {
    it('deve retornar todos os valores corretamente', () => {
      const entity = new UserEntity(props)

      expect(entity.id).toBe('1')
      expect(entity.name).toBe('Bene')
      expect(entity.email).toBe('bene@test.com')
      expect(entity.password).toBe('123456')
      expect(entity.createdAt).toBe(mockDate)
      expect(entity.props).toEqual(props)
    })
  })

  describe('update', () => {
    it('deve validar ao atualizar o nome', () => {
      const validateSpy = jest
        .spyOn(UserEntity, 'validate')
        .mockReturnValue(true)

      const entity = new UserEntity(props)

      entity.update('Novo Nome')

      expect(validateSpy).toHaveBeenCalledWith({
        ...props,
        name: 'Novo Nome',
      })
    })
  })

  describe('updatePassword', () => {
    it('deve validar ao atualizar a senha', () => {
      const validateSpy = jest
        .spyOn(UserEntity, 'validate')
        .mockReturnValue(true)

      const entity = new UserEntity(props)

      entity.updatePassword('novaSenha123')

      expect(validateSpy).toHaveBeenCalledWith({
        ...props,
        password: 'novaSenha123',
      })
    })
  })

  describe('toJSON', () => {
    it('deve retornar os dados serializados', () => {
      const entity = new UserEntity(props)

      expect(entity.toJSON()).toEqual(props)
    })
  })
})
