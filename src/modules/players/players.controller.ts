import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { DistributeValidator, SetPlayerValidator } from './players.validators';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Post('set')
  @ApiConsumes('application/x-www-form-urlencoded')
  public setPlayer(@Body() body: SetPlayerValidator) {
    return this.playerService.setPlayer(body.n);
  }

  @Post('distribute')
  @ApiConsumes('application/x-www-form-urlencoded')
  public distribute(@Body() body: DistributeValidator) {
    return this.playerService.distribute(body.times);
  }

  @Post('distribute/all')
  @ApiConsumes('application/x-www-form-urlencoded')
  public distributeAll() {
    return this.playerService.distributeAll();
  }

  @Get('all')
  @ApiConsumes('application/x-www-form-urlencoded')
  public all() {
    return this.playerService.getPlayers();
  }

  @Get('cards/return')
  @ApiConsumes('application/x-www-form-urlencoded')
  public return() {
    return this.playerService.returnCards();
  }
}
