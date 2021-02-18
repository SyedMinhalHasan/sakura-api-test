import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from '.'
import { AppService } from '~/services/app'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()
  })

  describe('getHello', () => {
    it('should return "Sushi server running"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getHello()).toBe('Sushi server running')
    })
  })
})
