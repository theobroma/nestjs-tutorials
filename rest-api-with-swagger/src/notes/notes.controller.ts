import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@ApiTags('Notes') // <---- Отдельная секция в Swagger для всех методов контроллера
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  // @Post()
  // create(@Body() createNoteDto: CreateNoteDto) {
  //   return this.notesService.create(createNoteDto);
  // }

  @Post() // обработает POST http://localhost/notes?userId={userId}
  create(
    @Query('userId') userId: number, // <--- достанет userId из query строки
    @Body() createNoteDto: CreateNoteDto,
  ) {
    return this.notesService.create(userId, createNoteDto);
  }

  // @Get()
  // findAll() {
  //   return this.notesService.findAll();
  // }
  @Get() // обработает GET http://localhost/notes?userId={userId}
  findAll(@Query('userId') userId: number) {
    return this.notesService.findAll(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notesService.findOne(+id);
  // }
  @Get(':noteId') // обработает GET http://localhost/notes/{noteId}
  findOne(@Param('noteId') noteId: number) {
    return this.notesService.findOne(noteId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
  //   return this.notesService.update(+id, updateNoteDto);
  // }
  @Patch(':noteId') // обработает PATCH http://localhost/notes/{noteId}
  update(
    @Param('noteId') noteId: number,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return this.notesService.update(noteId, updateNoteDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.notesService.remove(+id);
  // }
  @Delete(':noteId') // обработает DELETE http://localhost/notes/{noteId}
  remove(@Param('noteId') noteId: number) {
    return this.notesService.remove(noteId);
  }
}
