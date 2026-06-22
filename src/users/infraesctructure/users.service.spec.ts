import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

describe('UsersService', () => {
  let service: UsersService

  beforeEach(() => {
    service = new UsersService()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('create', () => {
    it('should return create message', () => {
      const dto = {} as CreateUserDto

      const result = service.create(dto)

      expect(result).toBe('This action adds a new user')
    })
  })

  describe('findAll', () => {
    it('should return find all message', () => {
      const result = service.findAll()

      expect(result).toBe('This action returns all users')
    })
  })

  describe('findOne', () => {
    it('should return find one message', () => {
      const result = service.findOne(1)

      expect(result).toBe('This action returns a #1 user')
    })
  })

  describe('update', () => {
    it('should return update message', () => {
      const dto = {} as UpdateUserDto

      const result = service.update(1, dto)

      expect(result).toBe('This action updates a #1 user')
    })
  })

  describe('remove', () => {
    it('should return remove message', () => {
      const result = service.remove(1)

      expect(result).toBe('This action removes a #1 user')
    })
  })
})
