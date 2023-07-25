import { CatsService } from './cats.service';
import { CreateCatDto } from './CreateCatDto';
import { Cat } from './interface/cat.interface';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    findAll(): Cat[];
    findOne(id: string): string;
    create(CreateCatDto: CreateCatDto): void;
    update(id: string, createCatDto: CreateCatDto): string;
    remove(id: string): string;
}
